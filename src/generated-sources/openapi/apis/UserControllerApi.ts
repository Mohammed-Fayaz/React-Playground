/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface AddUserRequest {
    firstName: string;
    lastName: string;
}

export interface DeleteUserRequest {
    firstName: string;
}

/**
 * 
 */
export class UserControllerApi extends runtime.BaseAPI {

    /**
     */
    async addUserRaw(requestParameters: AddUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.firstName === null || requestParameters.firstName === undefined) {
            throw new runtime.RequiredError('firstName','Required parameter requestParameters.firstName was null or undefined when calling addUser.');
        }

        if (requestParameters.lastName === null || requestParameters.lastName === undefined) {
            throw new runtime.RequiredError('lastName','Required parameter requestParameters.lastName was null or undefined when calling addUser.');
        }

        const queryParameters: any = {};

        if (requestParameters.firstName !== undefined) {
            queryParameters['firstName'] = requestParameters.firstName;
        }

        if (requestParameters.lastName !== undefined) {
            queryParameters['lastName'] = requestParameters.lastName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/add`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async addUser(requestParameters: AddUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.addUserRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.firstName === null || requestParameters.firstName === undefined) {
            throw new runtime.RequiredError('firstName','Required parameter requestParameters.firstName was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        if (requestParameters.firstName !== undefined) {
            queryParameters['firstName'] = requestParameters.firstName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/delete`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getUsersRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     */
    async getUsers(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<User>> {
        const response = await this.getUsersRaw(initOverrides);
        return await response.value();
    }

}