import axios from 'axios'

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{Authorization:'Bearer kTfCJUULxjTGXlWxrInMP8FB5jW-qdIJjVYRI1JOh4LU2BOOuRJ32bDTLTJEnGGu7Co0WVWjSwLcuhCTA_H1qdn8v4NCh7npD7wn58pZLAgQq_vmQhPqRMAReMgCZXYx'}
})