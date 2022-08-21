import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userChange } from "../redux/user";

const useCheckLogin = () => {
    const dispatch = useAppDispatch();
    const userFromRedux = useAppSelector(store => store.user);
    console.log(userFromRedux);

    if(userFromRedux.email===''){
        const lsUserJSON = localStorage.getItem('user-credentials');
        const lsUser = lsUserJSON ? JSON.parse(lsUserJSON) : null;
        console.log(lsUser);
    
        if(lsUser!==null){
            dispatch(userChange({user: lsUser}));
        };
    };
};

export default useCheckLogin;

