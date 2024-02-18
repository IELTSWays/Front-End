import { useState } from "react";

// mtu
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['23'])
  const [answer, setAnswer] = useState<any>(answersAll['00023'])

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00023': (e.target.value).trim().toLowerCase() })))
  }

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '23': !flag })))
  }

  return (
    <div className="align-items-start justify-content-space-between">
      <div className="d-flex">
        <Typography sx={{ pr: 1, py: 1 }} id={`q-${qn}`}>
          The first bike-sharing scheme was the idea of the Dutch group Provo. The people who belonged to this group were
        </Typography>
        <div className={`text-field ${currentQuestion == qn && 'active'}`}>
          <TextField
            autoComplete='off'
            margin="normal"
            placeholder={qn}
            value={answer}
            onChange={(e) => answerHandler(e)}
            onClick={() => dispatch(setCurrentQuestion(qn))}
          />
        </div>
      </div>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 23 && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>

  );
};

export default index;
