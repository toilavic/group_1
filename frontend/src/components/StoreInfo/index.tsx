import styles from './StoreInfo.module.css'
import {
    Box,
    Grid,
} from "@mui/material";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIGetStoreByID from '../../api/APIGetStoreByID';
import ShowmapMini from '../showmap/ShowmapMini';

import IStore from '../../contexts/IStores';

const StoreInfo: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedStore, setSelectedStore] = useState<IStore>()

    async function _APIGetStoreByID() {
        const result = await APIGetStoreByID(id)
        if (result.status == 200) setSelectedStore(result.data)
    }

    useEffect(() => {
        _APIGetStoreByID()
    })

    return <div className={styles.container}>
        <Box style={{ marginTop: '1rem', padding: '0 2rem' }} >
            <Grid container style={{ marginLeft: '10px' }}>
                <Grid item xs={7}>
                    <div style={{ height: '40vh', width: '40vw', borderRadius: '10px', overflow: 'hidden' }}>
                        <ShowmapMini coordinates = {selectedStore?.location?.coordinates}  />
                    </div>
                </Grid>
                <Grid item xs={5}>sd
                </Grid>
            </Grid>
        </Box>
    </div>
}

export default StoreInfo;