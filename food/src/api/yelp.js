import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer B2DM0uitQiJpw87o6nnvjcfYtz6euwrGGyse3qZMNlO99Z9w6W9Gj2BFs_5P670CCZP3VZg_XrviPyhLFUaVGsYQUb4PtuL8rNx8StZ4pd50XgocobhcwpW1WJUHYHYx',
  },
});
