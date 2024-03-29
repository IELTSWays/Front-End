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

  const [flag, setFlag] = useState(flags['24'])
  const [answer, setAnswer] = useState<any>(answersAll['24'])

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '24': (e.target.value).trim().toLowerCase() })))
  }

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '24': !flag })))
  }

  return (
    <div className="ielts-question-textfield" id={`q-${qn}`}>
      <span> They were concerned about damage to the environment and about</span>
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
      <span>and believed that the bike-sharing scheme would draw attention to these issues.</span>

      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 24 && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
};

export default index;
