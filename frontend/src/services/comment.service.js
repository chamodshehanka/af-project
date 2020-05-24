import Axios from 'axios';
import { environment } from '../configs/environment';

// Add Comment
export function addComment(clientId, productId, comment) {
  const data = {
    clientId: clientId,
    productId: productId,
    comment: comment,
  };
  console.log(data);
  Axios.post(environment.baseURL + 'comment/add', data)
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));
}
