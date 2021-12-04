import { FormControl, makeStyles } from "@material-ui/core";
import {
   Grid,
   Card,
   CardContent,
   CardMedia,
   CardActionArea,
   Box,
   InputLabel,
   Select,
   MenuItem,
   Skeleton
} from "@mui/material";

import { useContext, useState } from "react";
import { StoresContext } from "../../../contexts/StoresContext";

interface Props {
   selectStore: (id: string) => any;
}

const MapLeft: React.FC<Props> = ({ selectStore }) => {

   const { stores, getRateColor, getAvgRate, getDeductedPrice, setStoreId } = useContext(StoresContext);
   const classes = useStyles();
   const totalStores = stores.length || 0

   const DEFAULT_STORE_URL = "https://i.pinimg.com/originals/70/88/36/708836ce6b5cd801c2b33fc4f3feb476.jpg"

   let sortedRoom = stores;
   const [sort, setSort] = useState("");

   if (sort) {
      let tempStores;
      if (sort === "cheapest") {
         tempStores = stores.sort(function (a: any, b: any) {
            return a.price - b.price
         })
         sortedRoom = tempStores;
      }
      else {
         var tam = stores.map((store: any) => {
            store.rateArv = getAvgRate(store.rate);
            return store;
         });
         tempStores = tam.sort(function (a: any, b: any) {
            return b.rateArv - a.rateArv
         })
         sortedRoom = tempStores;
      }
   }

   return (
      <>
         <div style={{ display: 'flex' }}>
            <h2>Select between {totalStores} barber shops in the area</h2>
            <div style={{ flex: 1 }}></div>
            <Box style={{ justifyContent: 'flex-end', marginRight: '5rem' }}>
               <FormControl style={{ minWidth: 100, height: 80 }}>
                  <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={sort}
                     label="Sort by:"
                     onChange={(event) => setSort(event.target.value)}
                     disabled={sortedRoom.length === 0}
                     style={{ height: '3em', textAlign: 'center' }}
                  >
                     <MenuItem value="best">Best</MenuItem>
                     <MenuItem value="cheapest">Cheapest</MenuItem>
                  </Select>
               </FormControl>
            </Box>
         </div>
         {/* style here just for example */}
         <Box style={{ maxHeight: '81vh', maxWidth: '100wh', overflow: 'auto' }}>
            <Grid container style={{ alignItems: 'space-between', justifyContent: 'center' }} >
               {sortedRoom.length ? (sortedRoom.map((store: any) => {
                  return (
                     <Card sx={{ maxWidth: 345 }} className={classes.paperMap} key={store?.id} onClick={() => selectStore(store?.id)} onMouseEnter={() => {
                        setStoreId(store?.id);
                     }}
                     onMouseLeave={()=>{
                        setStoreId('');
                     }}
                     >
                        <CardActionArea>
                           <CardMedia
                              key={store?.id}
                              component="img"
                              height="140"
                              image={DEFAULT_STORE_URL}
                              alt="green iguana"
                           />
                           <CardContent>
                              <h2>{store?.name} &nbsp;
                                 <span style={{ color: 'red' }}>{store?.discount_rate ? `-${store?.discount_rate}%` : ''}</span>
                              </h2>
                              <h3>{store?.address}</h3>
                              <h3 style={{ color: getRateColor(getAvgRate(store?.rate)) } || 'green'}>{getAvgRate(store?.rate) || 0} ★ {` (${store?.rate.length || 0})`}</h3>
                              <h3>{
                                 store?.discount_rate > 0 ?
                                    `Original ${store?.price}€  => ${getDeductedPrice(store?.price, store?.discount_rate)}€` :
                                    `${store?.price}€`}
                              </h3>
                              <h3>Open from: 10:00 AM
                                 {/* {store?.opentime} */}
                              </h3>
                           </CardContent>
                        </CardActionArea>
                     </Card>
                  );
               })
               ) : (
                  Array.from(new Array(9)).map((a, i) => {
                     return (
                        <Card sx={{ maxWidth: 345 }} className={classes.paperMap} key={i}>
                           <CardActionArea>
                              <Skeleton variant="rectangular" width={310} height={118} />
                              <CardContent>
                                 <Skeleton height={30} />
                                 <Skeleton width={230} height={20} />
                                 <Skeleton width={200} height={18} />
                                 <Skeleton width={170} height={18} />
                                 <Skeleton width={170} height={18} />
                              </CardContent>
                           </CardActionArea>
                        </Card>
                     );
                  })
               )
               }
            </Grid>
         </Box>
      </>

   );
};

const useStyles = makeStyles((theme: any) => ({
   paperMap: {
      width: 310,
      margin: 5,
      padding: 5,
      cursor: "pointer"
   },
}));

export default MapLeft;
function forEach(stores: import("../../../contexts/IStores").default[], arg1: Number) {
   throw new Error("Function not implemented.");
}

