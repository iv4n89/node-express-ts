import { Body, Controller, Example, Post, Route, Tags } from "tsoa";
import { BaseJsonResponse } from "../../interfaces/response.interface";
import { User } from "../../models";
import { authService, userService } from "../../services";
import { generateJwt } from "../../util";

@Tags('Authorization')
@Route("api/auth")
export class AuthController extends Controller {
  /**
   * Take from database the user with the email given and validate the password provided.
   * If both of them are correct, generate a token to use in all api endpoints
   * @param body email and password
   */
  @Example<BaseJsonResponse<{ token: string; user: Partial<User> }>>({
    message: "Ok",
    error: false,
    code: 200,
    result: {
      token: "token_generado",
      user: {
        id: 1,
        name: "exampleName",
        last_name: "exampleLasName",
        username: "example",
        email: "email@example.com",
        birth_date: new Date("1989-01-01"),
        bio: null,
        gender: null,
        home_phone: null,
        mobile_phone: null,
        user_image: null,
        is_active: 1,
      },
    },
  })
  @Post("login")
  public async login(
    @Body() { email, password }: { email: string; password: string }
  ) {
    const { token, user } = await authService.verifyPassword(email, password);
    return {
      token,
      user,
    };
  }

  /**
   * Create a new user in the database and get it authenticated
   * @param attributes All attributes from body request to create the user
   */
  @Example<BaseJsonResponse<{ token: string, user: Partial<User> }>>({
    message: 'Ok',
    error: false,
    code: 200,
    result: {
      token: 'generated token',
      user: {
        id: 1,
        name: "exampleName",
        last_name: "exampleLasName",
        username: "example",
        email: "email@example.com",
        birth_date: new Date("1989-01-01"),
        bio: null,
        gender: null,
        home_phone: null,
        mobile_phone: null,
        user_image: null,
        is_active: 1,
      }
    }
  })
  @Post("register")
  public async register(@Body() attributes: User) {
    const user = await userService.create(attributes);
    const token = await generateJwt(user.id);
    return {
      token,
      user,
    };
  }
}
