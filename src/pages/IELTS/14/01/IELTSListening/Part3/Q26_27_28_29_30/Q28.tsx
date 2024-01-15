import { useState } from "react";
import { useDrop } from "react-dnd";

// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, } from '@/store/slices/user/userSlice'
// store

const Q28 = ({ qn }: any) => {

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [item, setItem] = useState(answersAll['00028']);

  const dispatch = useAppDispatch();

  const [{ hover }, drop] = useDrop(() => ({
    accept: "ielts",
    collect: (monitor) => {
      return {
        hover: monitor.isOver({ shallow: true })
      }
    },
    drop: (item: any, _monitor) => {
      setItem(item);
      dispatch(setAnswersAll(Object.assign({}, answersAll, { '00028': item })))
      dispatch(setCurrentQuestion(28))
    },
  }));

  hover && dispatch(setCurrentQuestion(28))

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      sx={{ alignItems: 'center', py: 1 }}
      id={`q-${qn}`}
      className="drop-container"
    >
      <Paper elevation={0} className="drop-container-text">
        <Typography>Past mistakes</Typography>
      </Paper>
      <Paper elevation={0}>
        <Box ref={drop} >
          <Paper
            elevation={0}
            className={`
                ${hover && 'isDroping'}
                ielts-dropbox ${item == null && 'empty'} 
                question-now ${currentQuestion == qn && 'active'} 
            `}
            sx={{ p: 0.5, my: 1.5 }}>
            {item ? item.title : qn}
          </Paper>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Q28;