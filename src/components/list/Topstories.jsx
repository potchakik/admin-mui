import React, { useEffect, useState } from "react";
import axios from "axios";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { DataGrid } from "@mui/x-data-grid";

//import FirstPageIcon from "@mui/icons-material/FirstPage";
//import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
//import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
//import LastPageIcon from "@mui/icons-material/LastPage";

const Topstories = () => {
  const [datas, setDatas] = useState([]);

  datas.map((e, i) => (e["num"] = i + 1 + ". "));

  useEffect(() => {
    axios
      .get("https://dev-newsapp.abs-cbnnews.com/list/topstories.json")
      .then((res) => setDatas(res.data.items));
  }, []);

  const columns = [
    { field: "num", headerName: "No. ", width: 50 },
    { field: "itemId", headerName: "Item Id", width: 100 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "section", headerName: "Section", width: 150 },
    {
      field: "url",
      headerName: "Url",
      width: 500,
      renderCell: (params) => (
        <Link href={params.row.url} rel="noopener" target="_blank">
          {params.row.url}
        </Link>
      ),
    },
    { field: "thumbnailurl", headerName: "ThumbnailUrl", width: 300 },
    //{ field: "mediumurl", headerName: "Item Id" },
    //{ field: "imageurl", headerName: "Item Id" },
    { field: "datePublished", headerName: "Date Published", width: 300 },
    { field: "contentType", headerName: "ContentType", width: 300 },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        getRowId={(data) => data.itemId}
        loading={!datas.length}
        isRowSelectable={(row) => console.log(row)}
      />
    </Box>
  );
};

export default Topstories;
