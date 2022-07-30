import { Router } from 'express';
export const router = Router();

export { default as userRouter } from './user.routes';
export { default as authRouter } from './auth/auth.routes';

export { default as addressRouter } from './address.routes';
export { default as countryRouter } from './adm/country.routes';
export { default as communityRouter } from './adm/community.routes';
export { default as provinceRouter } from './adm/province.routes';
export { default as cityRouter } from './adm/city.routes';

export { default as groupRouter } from './auth/group.routes';
export { default as permissionRouter } from './auth/permission.routes';

export { default as languageRouter } from './auth/language.routes';