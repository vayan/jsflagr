/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import Flag from './Flag';





/**
* The FlagSnapshot model module.
* @module model/FlagSnapshot
* @version 1.0.0
*/
export default class FlagSnapshot {
    /**
    * Constructs a new <code>FlagSnapshot</code>.
    * @alias module:model/FlagSnapshot
    * @class
    * @param id {Number} 
    * @param flag {module:model/Flag} 
    * @param updatedAt {String} 
    */

    constructor(id, flag, updatedAt) {
        

        
        

        this['id'] = id;this['flag'] = flag;this['updatedAt'] = updatedAt;

        
    }

    /**
    * Constructs a <code>FlagSnapshot</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FlagSnapshot} obj Optional instance to populate.
    * @return {module:model/FlagSnapshot} The populated <code>FlagSnapshot</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FlagSnapshot();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
            }
            if (data.hasOwnProperty('flag')) {
                obj['flag'] = Flag.constructFromObject(data['flag']);
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} updatedBy
    */
    updatedBy = undefined;
    /**
    * @member {module:model/Flag} flag
    */
    flag = undefined;
    /**
    * @member {String} updatedAt
    */
    updatedAt = undefined;








}


