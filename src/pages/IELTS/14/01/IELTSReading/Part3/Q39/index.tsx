import { useState } from "react";

// mtu
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// mtu

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch()

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [answer, setAnswer] = useState<any>(answersAll['00039'])

  const postAnswer = useQuery({
    enabled: false,
    queryKey: ['postAnswer39'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": false,
        "answers": {
          "00039": localStorage.getItem('00039')
        }
      })
      const data = await response.data
      getAnswer.refetch()
      return data
    },
  })

  const getAnswer = useQuery({
    queryKey: ['getAnswer39'],
    queryFn: async () => {
      const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
      const data = await response.data.answers
      dispatch(setAnswersAll(data))
      return data
    },
  })

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    localStorage.setItem('00039', e.target.value);
    postAnswer.refetch()
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00039': (e.target.value).trim().toLowerCase() })))
    getAnswer.refetch()
  }

  return (
    <>
      <Typography sx={{ px: 1, py: 1 }} id={`q-${qn}`}>
      They also found that the activities needed to fit with both the company’s
      </Typography>
      <div className={`text-field ${currentQuestion == qn && 'active'}`}>
        <TextField
          margin="normal"
          placeholder={qn}
          value={answer}
          onChange={(e) => answerHandler(e)}
          onClick={() => dispatch(setCurrentQuestion(qn))}
        />
      </div>
    </>
  );
};

export default index;
