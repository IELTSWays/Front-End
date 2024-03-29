import React from "react";
import { useState } from "react";

// mtu
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

  const [flag, setFlag] = useState(flags['25'])
  const [answer, setAnswer] = useState<any>(answersAll['25'])

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '25': (e.target.value).trim().toLowerCase() })))
  }

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '25': !flag })))
  }

  return (
    <div className="ielts-question-textfield" id={`q-${qn}`}>
      <div>
        <span> As well as painting some bikes white, they handed out </span>
      </div>
      <div className={`text-field ${currentQuestion == qn && 'active'}`}>
        <TextField
          autoComplete='off'
          spellCheck="false"
          margin="normal"
          placeholder={qn}
          value={answer}
          onChange={(e) => answerHandler(e)}
          onClick={() => dispatch(setCurrentQuestion(qn))}
        />
      </div>
      <span>that condemned the use of cars.</span>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 25 && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
};

export default index;