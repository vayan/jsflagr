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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flagr);
  }
}(this, function(expect, Flagr) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flagr.EvaluationBatchRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EvaluationBatchRequest', function() {
    it('should create an instance of EvaluationBatchRequest', function() {
      // uncomment below and update the code to test EvaluationBatchRequest
      //var instane = new Flagr.EvaluationBatchRequest();
      //expect(instance).to.be.a(Flagr.EvaluationBatchRequest);
    });

    it('should have the property entities (base name: "entities")', function() {
      // uncomment below and update the code to test the property entities
      //var instane = new Flagr.EvaluationBatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property enableDebug (base name: "enableDebug")', function() {
      // uncomment below and update the code to test the property enableDebug
      //var instane = new Flagr.EvaluationBatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property flagIDs (base name: "flagIDs")', function() {
      // uncomment below and update the code to test the property flagIDs
      //var instane = new Flagr.EvaluationBatchRequest();
      //expect(instance).to.be();
    });

  });

}));