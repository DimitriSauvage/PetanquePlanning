export default interface ListItemProps<T> {
  /**
   * Element to display
   */
  element: T;
  /**
   * Function the item is selected
   */
  onSelect?: Function;
}
