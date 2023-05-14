import express, {Request, Response} from 'express';
const app = express();
const PORT =  process.env.PORT || 3000;

//app.use(express.json);
const products = [{"title":"kiwi"},{"title":"orange"} ]
const adresses = [{"value":"kiwioka 9"}, {"value":"turionu 290 "}]

app.get('/products', (req: Request, res: Response) => {
  res.send(products);
});

app.get('/adresses', (req: Request, res: Response) => {
  res.send(products);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
