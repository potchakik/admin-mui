import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";

const ExtendedLatestArticle = () => {
  const [datas, setDatas] = useState([]);
  //  const [pageSize, setPageSize] = useState(5);

  datas.map((e, i) => (e["num"] = i + 1 + ". "));

  useEffect(() => {
    axios
      .get(
        "https://dev-newsapp.abs-cbnnews.com/extended/list/latestarticlelist.json"
      )
      .then((res) => setDatas(res.data.items));
  }, []);

  const columns = [
    { field: "num", headerName: "No. ", width: 50 },
    { field: "itemId", headerName: "Item Id", width: 100 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "section", headerName: "Section", width: 150 },
    { field: "keywords", headerName: "Keywords", width: 150 },
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
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        getRowId={(data) => data.itemId}
        loading={!datas.length}
        isRowSelectable={(row) => console.log(row)}
        //pageSize={pageSize}
        autoPageSize
        //rowsPerPageOptions={[5, 10, 20]}
      />
    </Box>
  );
};

export default ExtendedLatestArticle;
