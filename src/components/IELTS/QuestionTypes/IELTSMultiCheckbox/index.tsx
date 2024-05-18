import React from "react";
import { useState, useEffect } from "react";

import {FormControlLabel, Checkbox, Paper, Typography, styled, AccordionSummary as MuiAccordionSummary} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'

const AccordionSummary = styled((props: any) => (
  <MuiAccordionSummary
    {...props}
  />
))(() => ({
}));

const index = ({ qn, question, checkList }: any) => {

  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)
  const [flag, setFlag] = useState(flags[qn])

  let init: any;
  if (answersAll[qn] == null) {
    init = []
  }
  else {
    init = answersAll[qn]
  }

  const [checked, setChecked] = useState(init);

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { [qn]: !flag })))
  }

  const handleCheck = (event: { target: { checked: any; value: any; }; }) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked?.length
    ? checked?.reduce((total: string, item: string) => {
      return total + ", " + item;
    })
    : "";

  if (checked?.length > 2) {
    const array = checkedItems.split(", ");
    const newArray = array.slice(1);
    setChecked(newArray)
  }

  useEffect(() => {
    dispatch(setAnswersAll(Object.assign({}, answersAll, {
      [qn]: checked,
      [parseInt(qn) + 1]: checked
    })))
  }, [checked]);

  return (
    <div className="justify-content-space-between">
      <div
        id={`q-${qn}`}
      >
        <AccordionSummary
        >
          <Paper elevation={0} sx={{ cursor: 'default' }}>
            <Typography>
              <strong className={`question-now mr-5 ${flag && 'active-flag'} ${currentQuestion == qn && 'active'} `}>
                {qn} - {parseInt(qn) + 1}
              </strong>
              which <strong> TWO </strong> {question}
            </Typography>
          </Paper>
        </AccordionSummary>
        <div className="ielts-checkbox">
          {checkList.map((item, index) => (
            <Paper elevation={0} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={(item.value)}
                    checked={checked?.includes(item.value)}
                    value={item.value}
                    onChange={handleCheck}
                    onClick={() => dispatch(setCurrentQuestion(qn))}
                  />
                }
                label={item.label}
              />
            </Paper>
          ))}
        </div>
      </div>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  )
}
export default index