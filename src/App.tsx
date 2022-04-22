import { useQuery } from 'react-query';
// import { Drawer } from '@material-ui/core/Drawer';
 import LinearProgress from "@material-ui/core/LinearProgress"
 import  CircularProgress  from '@material-ui/core';
import  Grid  from '@material-ui/core/Grid';
import  AddShoppingCartIcon  from '@material-ui/icons/AddShoppingCart';
import  Badge  from '@material-ui/core/Badge';
import { Wrapper } from './App.styles';
import Item from './Item/item';

export type CartItem = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title:string,
  amount: number
}

const getProducts = async ():Promise<CartItem[]> => await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {

  const {data, isLoading, error} = useQuery<CartItem[]>('products', getProducts); 
console.log(data);

const getTotalItems = () => null;
const handleAddToCart = (item: CartItem) => null;
const handleRemoveFromCart = (item: CartItem) => null;

if(isLoading) return <LinearProgress />
if(error) return <div>something went wrong</div>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4} >
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
