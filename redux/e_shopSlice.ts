import { StoreProduct, UserInfo } from '@/type';
import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
	productData: StoreProduct[];
	userInfo: null | UserInfo;
}

interface RegisterModal {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const initialState: ProductState = {
	productData: [],
	userInfo: null,
};

export const registerModalSlice = createSlice({
	name: 'registerModal',
	initialState: {
		isOpen: false,
		onOpen: () => {},
		onClose: () => {},
	},
	reducers: {
		setRegisterModal: (state, action) => {
			state.isOpen = action.payload.isOpen;
			state.onOpen = action.payload.onOpen;
			state.onClose = action.payload.onClose;
		},

		resetRegisterModal: (state) => {
			state.isOpen = false;
			state.onOpen = () => {};
			state.onClose = () => {};
		},
	},
});

export const e_shopSlice = createSlice({
	name: 'e_shop',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.productData.find(
				(item: StoreProduct) => item._id === action.payload._id
			);

			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.productData.push(action.payload);
			}
		},
		plusQuantity: (state, action) => {
			const item = state.productData.find(
				(item: StoreProduct) => item._id === action.payload._id
			);
			if (item) {
				item.quantity++;
			}
		},
		minusQuantity: (state, action) => {
			const item = state.productData.find(
				(item: StoreProduct) => item._id === action.payload._id
			);
			if (item?.quantity === 1) {
				item.quantity = 1;
			} else {
				item!.quantity--;
			}
		},
		removeFromCart: (state, action) => {
			state.productData = state.productData.filter(
				(item: StoreProduct) => item._id !== action.payload._id
			);
		},
		resetCart: (state) => {
			state.productData = [];
		},
	},
});

export const {
	addToCart,
	plusQuantity,
	minusQuantity,
	removeFromCart,
	resetCart,
} = e_shopSlice.actions;
export default e_shopSlice.reducer;
