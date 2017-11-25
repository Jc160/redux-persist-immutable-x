'use strict';


//External
import TransitImmutableJs from 'transit-immutable-js';


//Internal


////////////////////////////////////////////////////////////


/**
 * This function handles the data transformation to string.
 * @param  {Variable} objState Current state.
 * @return {String}          Transformed state
 */
function onDataIn(varState) {
  if(varState && typeof varState === 'object') {
    return TransitImmutableJs.toJSON(varState);
  }


  return varState;
}


/**
 * This function handles the data restoration to immutable data.
 * @param  {Variable} varRaw Raw state date
 * @return {Immutable}        Immutable State
 */
function onDataOut(varRaw) {
  if(varRaw && typeof varRaw === 'string') {
    return TransitImmutableJs.fromJSON(varRaw);
  }


  return varRaw;
}


////////////////////////////////////////////////////////////


export default {
  in: onDataIn,
  out: onDataOut
};
