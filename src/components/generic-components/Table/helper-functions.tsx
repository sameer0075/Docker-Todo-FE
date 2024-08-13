import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel, Typography, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { Data, EnhancedTableProps, Order } from './interface';
import { useTableState } from '../../../custom-hooks/useTable';

/**
 * A comparator function that can be used to sort an array of objects
 * based on a specified property in descending order.
 *
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @param orderBy - The property of the objects to compare by.
 * @returns A negative number if `a` should be sorted before `b`,
 *          a positive number if `a` should be sorted after `b`,
 *          or 0 if `a` and `b` are equal.
 */
function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  if (b[orderBy] < a[orderBy]) {
    return -1; // a is greater than b
  }
  if (b[orderBy] > a[orderBy]) {
    return 1; // a is less than b
  }
  return 0; // a and b are equal
}

/**
 * Returns a comparator function that can be used to sort an array of objects
 * based on a specified property in either ascending or descending order.
 *
 * @param order - The order in which the objects should be sorted.
 *                Either 'asc' for ascending order or 'desc' for descending order.
 * @param orderBy - The property of the objects to sort by.
 * @returns A comparator function that can be used to sort an array of objects.
 */
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  /**
   * Comparator function that sorts two objects based on a specified property.
   *
   * @param a - The first object to compare.
   * @param b - The second object to compare.
   * @returns A negative number if `a` should be sorted before `b`,
   *          a positive number if `a` should be sorted after `b`,
   *          or 0 if `a` and `b` are equal.
   */
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

/**
 * Sorts an array in a stable manner using the provided comparator function.
 * @param array - The array to be sorted.
 * @param comparator - The function used to compare elements.
 * @returns The sorted array.
 */
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  // Create an array of tuples, where each tuple contains an element from the array
  // and its index.
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);

  // Sort the array of tuples based on the comparator function.
  stabilizedThis.sort((a, b) => {
    // Compare the elements using the comparator function.
    const order = comparator(a[0], b[0]);

    // If the elements are not equal, return the order.
    if (order !== 0) {
      return order;
    }

    // If the elements are equal, compare their indices.
    return a[1] - b[1];
  });

  // Return the sorted array by extracting the elements from the tuples.
  return stabilizedThis.map((el) => el[0]);
}

/**
 * Component for the table header.
 * @param props - The props for the component.
 * @returns The rendered JSX element.
 */
function EnhancedTableHead(props: EnhancedTableProps) {
  // Destructure the props
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;

  /**
   * Function to create a sort handler for a specific property.
   * @param property - The property to sort by.
   * @returns The sort handler function.
   */
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  // Get the table head labels from the table state
  const {
    headLabels
  } = useTableState();

  return (
    <TableHead>
      <TableRow>
        {/* Render table header cells */}
        {headLabels.map((headCell) => (
          <TableCell
            sx={{ padding: 1 }}
            key={headCell.id}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={true}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {/* Render the label */}
              <Typography sx={{ fontWeight: '500', fontFamily: 'Roboto', fontSize: '14px', lineHeight: '16.41px' }}>{headCell.label}</Typography>
              {/* Render the sort direction */}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export { getComparator, stableSort, EnhancedTableHead };
