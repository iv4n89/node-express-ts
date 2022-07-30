import { Repository } from "typeorm";
import db from '../../database/db';
import { Permission } from "../../models";
import { Base } from "../../models/Base";

/**
 * All possible actions (children sub-names)
 */
const actions = ['create', 'update', 'delete', 'export'];

/**
 * Parse the permissions received so it can be showed as follows:
 *   paren_permission: {
 *        create: true,
 *        update: false,
 *        delete: false,
 *        export: true
 *  }
 * @param permissions array of permissions (entity objects) to work with
 * @returns 
 */
export const parsePermission = (permissions: Permission[]) => {

    if (permissions.length === 0) return [];

    const { parent: { name }, children } = getParent(permissions);

    return {
        [name]: {
            [`create`]: children.findIndex(p => p.name.includes('create')) >= 0,
            [`update`]: children.findIndex(p => p.name.includes('update')) >= 0,
            [`delete`]: children.findIndex(p => p.name.includes('delete')) >= 0,
            [`export`]: children.findIndex(p => p.name.includes('export')) >= 0
        }
    }
};

/**
 * Update permissions many to many relation in database level 
 * based on the already active relations and the ones sent in the request body
 * The permissions object should be sent from the client by the following schema: 
 *           parent_name: {
 *                  create: boolean,
 *                  update: boolean,
 *                  delete: boolean,
 *                  export: boolean
 * }
 * 
 * No ids are required to perform the update
 * 
 * @param model T type entity object
 * @param permissions Permissions object from database to update the relations
 * @param repository Repository needed to perform the update
 */
export async function updatePermissions<T extends Base & { permissions: Permission[] }>(model: T, permissions: { [x: string]: { [y: string]: boolean } }, repository: Repository<T>) {
    //Getting the current active relations from the model
    const { permissions: currentPermissions } = await repository.createQueryBuilder('g')
        .leftJoinAndSelect('g.permissions', 'permissions')
        .where('g.id = (:id)', { id: model.id })
        .getOne();

    Object.entries(permissions).forEach(async ([key, value]) => {
        //Getting the active permission relations (the one its name does not have /name - action/ pattern)
        const parent = await db.getRepository(Permission).createQueryBuilder('p').where('p.name = :key', { key }).getOne();
        //Initialize a new array with the parent permission as the first element
        const newPermissions = [parent];
        //Iterate over all possible actions
        for (let act of actions) {
            //Find if we have an active relation between the the current action and the model. 
            //If so, and if it comes through the request body, we add it to our new permissions array.
            //Otherwise, if the current action permission did not come from the request, we continue to the next iteration
            const isNotPresent = currentPermissions.find(p => p.name === `${parent.name} - ${act}`);
            if (isNotPresent && !Object.keys(value).includes(act)) {
                newPermissions.push(isNotPresent);
                continue;
            }
            if (!value[act]) {
                continue;
            }
            const p = await db.getRepository(Permission).createQueryBuilder('p').where('p.name = :n', { n: `${key} - ${act}` }).getOne()
            newPermissions.push(p);
        }

        //Save the new permissions to model and database
        model.permissions = newPermissions;
        return await repository.save(model);
    })
}

/**
 * Get the parent from all permissions given
 * @param permissions Permission entity array
 * @returns 
 */
const getParent = (permissions: Permission[]) => ({
    parent: permissions.filter(p => p.children.length > 0)[0],
    children: permissions.filter(p => p.children.length === 0)
});