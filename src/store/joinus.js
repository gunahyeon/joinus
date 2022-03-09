import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name:"user",
    initialState:{
        firstName: '',
        middleName: '',
        surname:'',
        email: '',
        password:'',
        joinState:false,
    },
    reducers:{
        JOIN_SUCCESS:(state,action)=>{
            // state.firstName = action.payload.value[0].email;
            // state.middleName = action.payload.value[0].username;
            // state.surname = action.payload.value[0].id;
            // state.email = true;
            // state.password = 
            console.log(action.payload);
            state.firstName=action.payload.value.firstName;
            state.middleName=action.payload.value.middleName;
            state.surname=action.payload.value.surname;
            state.email=action.payload.value.email;
            state.password=action.payload.value.password;
            state.joinState=true;
        },
        JOIN_FAIL:()=>{
            // alert("회원 정보가 없습니다. 다시 입력해주세요.");
        },
    }
});
export const {JOIN_SUCCESS,JOIN_FAIL} = userSlice.actions;

export const joinus = (value) => (dispatch) => {
    // console.log(value);
    const data = {value:value};
    dispatch(JOIN_SUCCESS(data));
    }
export default userSlice.reducer;