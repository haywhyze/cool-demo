import {
  getMainDashboard,
  getShoppingDashboard,
  getShoppingOrders,
  getShoppingItems,
  getSellers,
  acceptOrder,
  denyOrder,
  shipOrder,
  deliverOrder,
  returnOrder,
  approveItem,
  denyItem,
  deleteItem,
  selloutItem,
} from "../api/shopping";

export const GET_MAIN_DASHBOARD = "GET_MAIN_DASHBOARD";
export const GET_MAIN_DASHBOARD_SUCCESS = "GET_MAIN_DASHBOARD_SUCCESS";
export const GET_MAIN_DASHBOARD_FAILURE = "GET_MAIN_DASHBOARD_FAILURE";

export const GET_SHOPPING_DASHBOARD = "GET_SHOPPING_DASHBOARD";
export const GET_SHOPPING_DASHBOARD_SUCCESS = "GET_SHOPPING_DASHBOARD_SUCCESS";
export const GET_SHOPPING_DASHBOARD_FAILURE = "GET_SHOPPING_DASHBOARD_FAILURE";

export const GET_SHOPPING_ITEMS = "GET_SHOPPING_ITEMS";
export const GET_SHOPPING_ITEMS_SUCCESS = "GET_SHOPPING_ITEMS_SUCCESS";
export const GET_SHOPPING_ITEMS_FAILURE = "GET_SHOPPING_ITEMS_FAILURE";

export const APPROVE_ITEM = "APPROVE_ITEM";
export const APPROVE_ITEM_SUCCESS = "APPROVE_ITEM_SUCCESS";
export const APPROVE_ITEM_FAILURE = "APPROVE_ITEM_FAILURE";

export const DENY_ITEM = "DENY_ITEM";
export const DENY_ITEM_SUCCESS = "DENY_ITEM_SUCCESS";
export const DENY_ITEM_FAILURE = "DENY_ITEM_FAILURE";

export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const SELLOUT_ITEM = "SELLOUT_ITEM";
export const SELLOUT_ITEM_SUCCESS = "SELLOUT_ITEM_SUCCESS";
export const SELLOUT_ITEM_FAILURE = "SELLOUT_ITEM_FAILURE";

export const GET_SHOPPING_ORDERS = "GET_SHOPPING_ORDERS";
export const GET_SHOPPING_ORDERS_SUCCESS = "GET_SHOPPING_ORDERS_SUCCESS";
export const GET_SHOPPING_ORDERS_FAILURE = "GET_SHOPPING_ORDERS_FAILURE";

export const GET_SELLERS = "GET_SELLERS";
export const GET_SELLERS_SUCCESS = "GET_SELLERS_SUCCESS";
export const GET_SELLERS_FAILURE = "GET_SELLERS_FAILURE";

export const ACCEPT_ORDER = "ACCEPT_ORDER";
export const ACCEPT_ORDER_SUCCESS = "ACCEPT_ORDER_SUCCESS";
export const ACCEPT_ORDER_FAILURE = "ACCEPT_ORDER_FAILURE";

export const DENY_ORDER = "DENY_ORDER";
export const DENY_ORDER_SUCCESS = "DENY_ORDER_SUCCESS";
export const DENY_ORDER_FAILURE = "DENY_ORDER_FAILURE";

export const SHIP_ORDER = "SHIP_ORDER";
export const SHIP_ORDER_SUCCESS = "SHIP_ORDER_SUCCESS";
export const SHIP_ORDER_FAILURE = "SHIP_ORDER_FAILURE";

export const DELIVER_ORDER = "DELIVER_ORDER";
export const DELIVER_ORDER_SUCCESS = "DELIVER_ORDER_SUCCESS";
export const DELIVER_ORDER_FAILURE = "DELIVER_ORDER_FAILURE";

export const RETURN_ORDER = "RETURN_ORDER";
export const RETURN_ORDER_SUCCESS = "RETURN_ORDER_SUCCESS";
export const RETURN_ORDER_FAILURE = "RETURN_ORDER_FAILURE";

export const action = (type, payload) => ({
  type,
  payload,
});

export const fetchShoppingDashboard = (dispatch) => {
  dispatch(action(GET_SHOPPING_DASHBOARD));
  getShoppingDashboard(
    (res) => {
      dispatch(action(GET_SHOPPING_DASHBOARD_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(GET_SHOPPING_DASHBOARD_FAILURE, err.response));
    }
  );
};

export const fetchMainDashboard = (dispatch) => {
  dispatch(action(GET_MAIN_DASHBOARD));
  getMainDashboard(
    (res) => {
      dispatch(action(GET_MAIN_DASHBOARD_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(GET_MAIN_DASHBOARD_FAILURE, err.response));
    }
  );
};

export const fetchShoppingOrders = (dispatch) => {
  dispatch(action(GET_SHOPPING_ORDERS));
  getShoppingOrders(
    (res) => {
      dispatch(action(GET_SHOPPING_ORDERS_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(GET_SHOPPING_ORDERS_FAILURE, err.response));
    }
  );
};

export const fetchShoppingItems = (dispatch) => {
  dispatch(action(GET_SHOPPING_ITEMS));
  getShoppingItems(
    (res) => {
      dispatch(action(GET_SHOPPING_ITEMS_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(GET_SHOPPING_ITEMS_FAILURE, err.response));
    }
  );
};

export const fetchSellers = (dispatch) => {
  dispatch(action(GET_SELLERS));
  getSellers(
    (res) => {
      dispatch(action(GET_SELLERS_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(GET_SELLERS_FAILURE, err.response));
    }
  );
};

export const postAcceptOrder = (dispatch, id) => {
  dispatch(action(ACCEPT_ORDER));
  acceptOrder(
    (res) => {
      dispatch(action(ACCEPT_ORDER_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(ACCEPT_ORDER_FAILURE, err.response));
    },
    id
  );
};

export const postDenyOrder = (dispatch, id) => {
  dispatch(action(DENY_ORDER));
  denyOrder(
    (res) => {
      dispatch(action(DENY_ORDER_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(DENY_ORDER_FAILURE, err.response));
    },
    id
  );
};

export const postShipOrder = (dispatch, id) => {
  dispatch(action(SHIP_ORDER));
  shipOrder(
    (res) => {
      dispatch(action(SHIP_ORDER_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(SHIP_ORDER_FAILURE, err.response));
    },
    id
  );
};

export const postDeliverOrder = (dispatch, id) => {
  dispatch(action(DELIVER_ORDER));
  deliverOrder(
    (res) => {
      dispatch(action(DELIVER_ORDER_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(DELIVER_ORDER_FAILURE, err.response));
    },
    id
  );
};

export const postReturnOrder = (dispatch, id) => {
  dispatch(action(RETURN_ORDER));
  returnOrder(
    (res) => {
      dispatch(action(RETURN_ORDER_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(RETURN_ORDER_FAILURE, err.response));
    },
    id
  );
};

export const postApproveItem = (dispatch, id) => {
  dispatch(action(APPROVE_ITEM));
  approveItem(
    (res) => {
      dispatch(action(APPROVE_ITEM_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(APPROVE_ITEM_FAILURE, err.response));
    },
    id
  );
};

export const postDenyItem = (dispatch, id) => {
  dispatch(action(DENY_ITEM));
  denyItem(
    (res) => {
      dispatch(action(DENY_ITEM_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(DENY_ITEM_FAILURE, err.response));
    },
    id
  );
};

export const postDeleteItem = (dispatch, id) => {
  dispatch(action(DELETE_ITEM));
  deleteItem(
    (res) => {
      dispatch(action(DELETE_ITEM_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(DELETE_ITEM_FAILURE, err.response));
    },
    id
  );
};

export const postSelloutItem = (dispatch, id) => {
  dispatch(action(SELLOUT_ITEM));
  selloutItem(
    (res) => {
      dispatch(action(SELLOUT_ITEM_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(SELLOUT_ITEM_FAILURE, err.response));
    },
    id
  );
};
