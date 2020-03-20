export default interface ListProps<T> {
  /**
   * Elements to display
   */
  elements: T[];
  /**
   * Function to apply when an item is selected
   */
  onSelect?: Function;
}
