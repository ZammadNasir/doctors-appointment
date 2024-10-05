import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from 'store';
import { getDataFromLocalStorage, getStringFromLocalStorage } from 'utils/localStore';

export default function useHelper() {
  const location = useLocation();
  const pathname = location.pathname;
  const theme = useTheme() as any;
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchDownLg = useMediaQuery(theme.breakpoints.down("lg"));
  const matchDownXl = useMediaQuery(theme.breakpoints.down("xl"));
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const matchUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const dispatch = useDispatch<AppDispatch>();
  const token = getStringFromLocalStorage('token') || "" as string;
  const membership = getStringFromLocalStorage('membership') || "" as string;
  const service_method = getStringFromLocalStorage('serviceMethod') || "" as string;
  const selected_address = getDataFromLocalStorage('selected_address') || {} as any;
  const store = getDataFromLocalStorage('store') || {} as any;
  const discounted_offer = getDataFromLocalStorage("discounted_offer") || {} as any;
  const user = getDataFromLocalStorage("user") || {} as any;
  const cart = getDataFromLocalStorage("cart") || [] as any;
  
  return {
    token,
    membership,
    service_method,
    selected_address,
    location,
    dispatch,
    navigate,
    store,
    isMobile,
    matchUpSm,
    matchDownMd,
    matchDownLg,
    matchDownXl,
    matchUpMd,
    matchUpLg,
    pathname,
    matchUpXl,
    discounted_offer,
    user,
    cart,
  } as any;
};
