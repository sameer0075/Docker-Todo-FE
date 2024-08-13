import { Box, Grid, Typography } from "@mui/material"
import { InputStyles, TaskStyles } from "./styles"
import CustomTextInput from "../../generic-components/TextInput"
import AssignmentIcon from '@mui/icons-material/Assignment';
import { inputLabel, inputLabelText } from "../Auth/styles"
import CustomText from "../../generic-components/Text"
import CustomButton from "../../generic-components/Button";
import CustomTable from "../../generic-components/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { TasksList, savetask, updateTask } from "../../../redux/slices/task-slice";

/**
 * Render the main dashboard layout.
 *
 * @returns {JSX.Element} The Dashboard component.
 */
const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [selected, setsetSelected] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: any) => state.tasks.tasks)

  useEffect(() => {
    dispatch(TasksList())
  }, [])

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  }

  /**
   * Handles form submission. If a task is selected, calls the updateTask dispatcher with the new title and id.
   * If no task is selected, calls the savetask dispatcher with the new title.
   * Resets title and selected state.
   */
  const handleSubmit = () => {
    // If a task is selected
    if (selected) {
      // Dispatch the updateTask action with the new title and id
      dispatch(updateTask({ title, id: selected[0].id }));
    } else {
      // Dispatch the savetask action with the new title
      dispatch(savetask({ title }));
    }

    // Reset title and selected state
    setTitle('');
    setsetSelected(null);
  }

  /**
   * Handles the click event when the update button is clicked.
   * Sets the selected task's title and id in the state.
   * 
   * @param {number} id - The id of the task to be updated
   */
  const handleUpdateClick = (id: number) => {
    // Filter the tasks array to find the task with the given id
    const selected = tasks.filter((task: any) => task.id === id);
    
    // If a task is found
    if (selected) {
      // Set the title and selected state with the values from the found task
      setTitle(selected[0].title); // Set the title state
      setsetSelected(selected); // Set the selected state
    }
  }

  return (
    <Box>
      {/* Main grid with padding */}
      <Box>
        <Typography variant="h5" sx={TaskStyles}>
          Tasks
        </Typography>

        <Box sx={InputStyles}>
          <CustomTextInput
            margin="normal"
            name="title"
            type="text"
            value={title}
            id="title"
            sx={{ width: '400px' }}
            label={
              <Box sx={inputLabel}>
                <AssignmentIcon />
                <CustomText sx={inputLabelText} content="Create a task" variant="subtitle1" />
              </Box>
            }
            extraProps={
              {
                showPassword: null
              }
            }
            onChange={handleChange}
          />

          <CustomButton
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              ml: 2,
              height: 55,
              width: 100,
              borderRadius: 'none',
              display: 'block',
              background: 'linear-gradient(180deg, #E7463F, #EF8439)'
            }}
            title={selected ? 'Update' : 'Submit'}
            disabled={!title}
            onSubmit={handleSubmit}
          />
        </Box>

        <Grid item xs={12}>
          <Grid item sx={{ px: 5 }}>
            <CustomTable handleUpdateClick={handleUpdateClick} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard
