import StorageStack from './StorageStack';
import ApiStack from './ApiStack';
import AuthStack from "./AuthStack";

export default function main(app) {
  const storageStack =  new StorageStack(app, 'storage');

  console.log({storageStack})

  const apistack = new ApiStack(app, 'api', {
    table : storageStack.table
  })

  new AuthStack(app, 'auth', {
    api : apistack.api,
    bucket : storageStack.bucket
  })
}
