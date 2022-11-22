import "./styles.css";
import Logo from "../../images/logo.svg";
import LitleLogo from "../../images/frame.svg";
import { AiOutlineDown,AiOutlineSearch,AiOutlineQuestionCircle,AiFillCaretRight, AiOutlinePlus} from "react-icons/ai";
import { BsFillBellFill, BsPersonCircle } from "react-icons/bs";
import { ImPencil } from "react-icons/im";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { BiExit } from "react-icons/bi";
import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="master-drop">
      <div className="dropdown">
        <button className="dropbtn">
          Contábil <AiOutlineDown className="seta" />
        </button>
        <div className="dropdown-content">
          <a href="#">Lorem </a>
          <a href="#">Lorem </a>
          <a href="#">Lorem </a>
          <a href="#">Lorem </a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Fiscal <AiOutlineDown className="seta" />
        </button>
        <div className="dropdown-content">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Societário
          <AiOutlineDown className="seta" />
        </button>
        <div className="dropdown-content">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Pessoal <AiOutlineDown className="seta" />
        </button>
        <div className="dropdown-content">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Setor Financeiro <AiOutlineDown className="seta" />
        </button>
        <div className="dropdown-content">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
      </div>

  
       
     

      <Divider  className="hr"/> 
      <div className="search-box">
        <input type="text" className="search-text" placeholder="Pesquisar..." />
        <a className="search-btn">
          <AiOutlineSearch />
        </a>
      </div>

      <div>
        <AiOutlineQuestionCircle style={{ cursor: "pointer" }} />
      </div>

      <div className="dropdown">
        <div className="dropbtn">
          <BsFillBellFill />
        </div>
        <div className="dropdown-content">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem </a>
        </div>
      </div>

      <div>
        <React.Fragment>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <img src={Logo} className="logo" />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10, 
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem><img src={LitleLogo}  style={{ marginRight: 20, borderRadius:50, fontSize: 20 }}/> emaildaempresa@gmail.com </MenuItem>
            <MenuItem><BsPersonCircle  style={{ marginRight: 20, fontSize: 20 }}/> Minha conta </MenuItem>
            <MenuItem><ImPencil style={{ marginRight: 20 }} /> Editar conta</MenuItem> 
            <MenuItem><MdOutlinePeopleAlt style={{ marginRight: 20, fontSize: 20 }} />{" "} Painel de controle</MenuItem>

            <Divider />

            <MenuItem>
              <div className="big-drop">
                <li className="big-btn">
                  <ListItemIcon>
                    <TfiReload style={{ marginRight: 20, fontSize: 20 }} />{" "}
                    <button className="dropbtn" href="#">
                      Mudar conta
                    </button>
                    <AiFillCaretRight
                      style={{
                        marginTop: 5,
                        marginRight: 20,
                        marginLeft: 20,
                        fontSize: 10,
                      }}
                    />
                  </ListItemIcon>
                  <div className="bigdrop-content">
                    <h3 className="h3">Administrador</h3>
                    <a href="#">emaacont.adm@gmail.com <img src={LitleLogo} className="litle-logo"/></a>
                    <h3 className="h3">Setor Contábil</h3>
                    <a href="#">emaacont.adm@gmail.com  <img src={LitleLogo} className="litle-logo"></img></a>
                    <a href="#">emaacont.adm@gmail.com  <img src={LitleLogo} className="litle-logo"></img></a>
                    <a href="#">emaacont.adm@gmail.com  <img src={LitleLogo} className="litle-logo"></img></a>
                    <Divider />
                   
                   <div className="div">
                    <AiOutlinePlus className="add" style={{ marginRight: 20,  marginTop:20, fontSize: 14 }}/> Novo Usuário
                    </div>
                   
                  </div>
                </li>
              </div>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <BiExit style={{ marginRight: 20, fontSize: 20 }} /> Sair
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
    </div>
  );
};
