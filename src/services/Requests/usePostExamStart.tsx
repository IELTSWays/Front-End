// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
// store

const usePostExamStart = () => {

  const fontSize = useAppSelector((state) => state.user.fontSize)
  console.log(fontSize);

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postExamStart'],
    queryFn: async () => {
      const response = await axiosInstance.post('exam/start-test', {
        "test": "3",
        "skill": "listening",
        "type": "academic",
        "book": 1
      })
      const data = await response.data
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default usePostExamStart;