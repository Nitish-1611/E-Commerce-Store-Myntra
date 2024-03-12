import {configureStore} from "@reduxjs/toolkit"
import bagSlice from "./bagSlice"
import FetchStatusSlice from "./fetchStatusSlice"
import itemsSlice from "./itemsSlice"



const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
})

export default myntraStore

