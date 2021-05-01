import { LocalizedString } from '@angular/compiler/src/output/output_ast';

export interface User {
  _id: string,
  username: string,
  email: string,
  password: string,
  token?: string
}
