import { useEffect, useState } from "react";
import { IRequestValue } from "../Types/RequestTypes";

/**
 * Execute a request
 * @param {Function} action Action to realize
 * @param {TValue} defaultValue Default value for the response
 * @type {TValue} Type of the managed value
 */
export default <TValue>(
  asyncAction: () => Promise<TValue>,
  defaultValue: TValue = null
): IRequestValue<TValue> => {
  const [value, setValue] = useState<TValue>(defaultValue);
  const [error, setError] = useState(null);
  const [ongoing, setOngoing] = useState(false);

  /**
   * Execute the request
   */
  const executeRequest = async () => {
    try {
      //Start
      setOngoing(true);

      //Execute the request and set the response in the value
      setValue(await asyncAction());
    } catch (error) {
      //Set the error
      setError(error);
    } finally {
      //Stop
      setOngoing(false);
    }
  };

  //Launch the action
  useEffect(() => {
    executeRequest();
  }, []);

  return {
    error,
    ongoing,
    value,
  };
};
