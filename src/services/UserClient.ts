import { Configuration, UserControllerApi } from 'generated-sources/openapi';

const configuration = new Configuration({ basePath: '/api' });

export const UserControllerService = new UserControllerApi(configuration);
