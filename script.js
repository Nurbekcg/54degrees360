(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 96.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67C28E09_5CF3_7DE7_41B2_DE53FF310BF0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -45.09,
   "yaw": 130.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D169F3_5D33_4624_41BA_0284E1487720"
  },
  {
   "backwardYaw": -83.91,
   "yaw": 75.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "backwardYaw": -1.13,
   "yaw": 0.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_t.jpg"
  }
 ],
 "label": "13",
 "id": "panorama_478A70DA_5D0F_C665_41BC_236726F77931",
 "thumbnailUrl": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_t.jpg",
 "overlays": [
  "this.overlay_47DD7052_5D11_C664_41BF_7EE25CD9C669",
  "this.overlay_474B5D6B_5D11_DE3B_41D4_25D1372991AB",
  "this.overlay_47224B9C_5D11_5A1D_41B4_7B7801904E08",
  "this.overlay_47EF9C8C_5D11_7EFD_41B5_98D1EA0557AF",
  "this.overlay_6EA640E4_5D16_C62C_41B0_A3E52BB66B5B",
  "this.overlay_6E56A370_5D16_CA24_41BE_7D70E420E3D1"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 156.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_646E8D9D_5CF3_7E1F_41A2_7CDD8D61615C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51D169F3_5D33_4624_41BA_0284E1487720"
  },
  {
   "backwardYaw": -77.88,
   "yaw": 84.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C"
  },
  {
   "backwardYaw": 75.49,
   "yaw": -83.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_478A70DA_5D0F_C665_41BC_236726F77931"
  },
  {
   "backwardYaw": -177.61,
   "yaw": 0,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_t.jpg"
  }
 ],
 "label": "17",
 "id": "panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499",
 "thumbnailUrl": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_t.jpg",
 "overlays": [
  "this.overlay_42CF14C1_5D11_4E64_41D3_19013260C54A",
  "this.overlay_4206013B_5D12_C61B_41CE_DAA27B2E1F6A",
  "this.overlay_7DE341D1_5D12_C667_4184_CE58D4406B2C",
  "this.overlay_7D5B123E_5D13_4A1C_41B2_71129B0CA1AC"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_627179BA_5CF3_4625_41C6_6CF8D5948687",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -71.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_645B0DB0_5CF3_7E25_41D1_E92CDE5806BE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66D55EA3_5CF3_7A2B_41D7_2A811BB20F38",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D6B953_5D31_4664_41D0_FD91B2438114",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_51D6B953_5D31_4664_41D0_FD91B2438114_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_478A70DA_5D0F_C665_41BC_236726F77931",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_478A70DA_5D0F_C665_41BC_236726F77931_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D169F3_5D33_4624_41BA_0284E1487720",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_51D169F3_5D33_4624_41BA_0284E1487720_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_631DE92E_5CF3_463D_41D3_975D58874584",
  {
   "media": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)",
   "camera": "this.panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6477BD71_5CF3_7E24_41A1_5E686CFF6907",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62BCA984_5CF3_46ED_41BC_C836D4C1BB67",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 20.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_678A2E36_5CF3_7A2C_41D7_1D24BB7B58AA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6713AE7B_5CF3_7A1B_41D7_341B88E0106A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -35.3,
   "yaw": -40.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B"
  },
  {
   "backwardYaw": 0,
   "yaw": -177.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499"
  },
  {
   "backwardYaw": 37.43,
   "yaw": 64.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_t.jpg"
  }
 ],
 "label": "16",
 "id": "panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22",
 "thumbnailUrl": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_t.jpg",
 "overlays": [
  "this.overlay_40A42B53_5D17_3A64_41D3_4EA9B459CFBE",
  "this.overlay_4006E31C_5D16_CA1C_41D0_BD917C23B4C2",
  "this.overlay_4029630C_5D16_CBFC_41C7_7950978DCD99"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_625159D7_5CF3_466B_418F_3C3701213C96",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -95.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66EF2E9E_5CF3_7A1C_41C9_5559B111A0BA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6661AEEA_5CF3_7A24_41BF_7F8567EEA7C3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_667ABEE4_5CF3_7A2D_41A0_94FBE1BAC0AC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 107.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6750EE54_5CF3_7A6C_41D4_2ADBFFD2CDC3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  },
  {
   "backwardYaw": 1.63,
   "yaw": 177.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA"
  },
  {
   "backwardYaw": 177.11,
   "yaw": -0.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_t.jpg"
  }
 ],
 "label": "10",
 "id": "panorama_51D6B953_5D31_4664_41D0_FD91B2438114",
 "thumbnailUrl": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_t.jpg",
 "overlays": [
  "this.overlay_4B854F57_5D13_3A6C_41C3_CEF8F9BA415F",
  "this.overlay_4822FAA6_5D11_3A2C_41B9_C6B06BCF9D00",
  "this.overlay_6C32CD3A_5D13_7E25_41AC_D55EC0E852D6",
  "this.overlay_6EFC00E8_5D13_C625_41D4_480D503B152F"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_679E8E29_5CF3_7A27_41CF_0378151CD586",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51C80674_5D31_CA2D_41C7_192364783D5D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  },
  {
   "backwardYaw": -1.13,
   "yaw": 179.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112"
  },
  {
   "backwardYaw": -178.49,
   "yaw": -1.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_t.jpg"
  }
 ],
 "label": "02",
 "id": "panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854",
 "thumbnailUrl": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_t.jpg",
 "overlays": [
  "this.overlay_4D0306D8_5D31_4A65_41C7_159B9F31D75A",
  "this.overlay_4C9BEB1A_5D31_3BE5_41C6_8A366CF6FFE7",
  "this.overlay_711148ED_5D0F_C63F_41A3_407F5C3DF263",
  "this.overlay_709D5251_5D0F_CA67_41D0_2967CD854532",
  "this.overlay_737A25B0_5D0E_CE25_41D4_2DCC6D2EA874"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 102.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66A11EC2_5CF3_7A64_41B5_2259CB2946A2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -158.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_676A4E4D_5CF3_7A7F_41C3_007B07A5B8B2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.73,
   "yaw": -0.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_t.jpg"
  }
 ],
 "label": "05",
 "id": "panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2",
 "thumbnailUrl": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_t.jpg",
 "overlays": [
  "this.overlay_48D61ABD_5D11_7A1F_41C9_EDFF2C7CF814",
  "this.overlay_725915A3_5D16_CE2B_41D7_421D8F3F05A8"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "backwardYaw": -6.91,
   "yaw": -154.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA"
  },
  {
   "backwardYaw": 0.38,
   "yaw": -1.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_478A70DA_5D0F_C665_41BC_236726F77931"
  },
  {
   "backwardYaw": -40.2,
   "yaw": -35.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22"
  },
  {
   "backwardYaw": 86.67,
   "yaw": -84.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_t.jpg"
  }
 ],
 "label": "15",
 "id": "panorama_51D69024_5D32_C62D_41CF_3FE55C73107B",
 "thumbnailUrl": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_t.jpg",
 "overlays": [
  "this.overlay_41108852_5D11_4665_4198_AFA1495BC25E",
  "this.overlay_40E3F7CC_5D11_4A7D_41D4_22B57CD5711D",
  "this.overlay_4056AE41_5D11_5A64_41A2_D7D4FD42EFC1",
  "this.overlay_6E1A07A9_5D17_CA24_41C6_E37014BBEBE4",
  "this.overlay_69B42970_5D17_4625_41B4_86F566890B43"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -165.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67674E46_5CF3_7A6C_41D4_867FAF61C09C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_669A4ECF_5CF3_7A7B_41BE_014EC3BD6A17",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.91,
  "class": "PanoramaCameraPosition",
  "pitch": 9.25
 },
 "id": "panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -169.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_626119C5_5CF3_466F_41A6_0905EF3EF7EF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -152.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66814ED6_5CF3_7A6D_41A4_6DABA46B6CA3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62AC5991_5CF3_46E7_41CD_193CCA897F2F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 30.52,
   "yaw": -127.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D169F3_5D33_4624_41BA_0284E1487720"
  },
  {
   "backwardYaw": 84.41,
   "yaw": -77.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499"
  },
  {
   "backwardYaw": 0.75,
   "yaw": 2.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "backwardYaw": 0.5,
   "yaw": 177.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA"
  }
 ],
 "vfov": 180,
 "label": "12",
 "id": "panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C",
 "thumbnailUrl": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_t.jpg",
 "hfovMin": "120%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_4493FB2B_5D11_3A24_41D5_F396E1FB2BD4",
  "this.overlay_445B5AB6_5D11_5A2C_41D5_A81B53D017C6",
  "this.overlay_45F71EA8_5D11_3A24_41C6_A378AC6DBAE5",
  "this.overlay_453ABF3D_5D0E_DA1F_41BF_91BCE5568195",
  "this.overlay_44384D9D_5D73_3E1C_41C0_7E3CA3954EA3",
  "this.overlay_6EAAADF9_5D11_FE24_41A0_8C57E43ECA30",
  "this.overlay_6A57224D_5D13_4A7F_41B0_0A6FB6F0C207"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64325DC3_5CF3_7E64_41D5_0D4CF6C37ABE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 70.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67D6CDFD_5CF3_7E1F_41CB_D8C0CCA69D97",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_7DD20954_59A8_EB6D_41D3_734D31F0A8F7.mp3",
  "oggUrl": "media/audio_7DD20954_59A8_EB6D_41D3_734D31F0A8F7.ogg",
  "class": "AudioResource"
 },
 "id": "audio_7DD20954_59A8_EB6D_41D3_734D31F0A8F7",
 "class": "MediaAudio",
 "data": {
  "label": "\u041c\u0423\u0420\u0410\u0421 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u0438 - \u00ab\u0427\u0435\u043a\u0441\u0438\u0437\u0434\u0438\u043a\u00bb. \u0416\u0430\u04a3\u044b \u043a\u043b\u0438\u043f 2025. \u0410\u0432\u0442\u043e\u0440\u0443_ \u042d\u043c\u0438\u043b \u0418\u0448\u0435\u043d"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D169F3_5D33_4624_41BA_0284E1487720_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66D85EAA_5CF3_7A24_41C3_903D8FF1A5DC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "camera": "this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "camera": "this.panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "camera": "this.panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "camera": "this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "camera": "this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "camera": "this.panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "camera": "this.panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D6B953_5D31_4664_41D0_FD91B2438114",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "camera": "this.panorama_51D6B953_5D31_4664_41D0_FD91B2438114_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "camera": "this.panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "camera": "this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_478A70DA_5D0F_C665_41BC_236726F77931",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "camera": "this.panorama_478A70DA_5D0F_C665_41BC_236726F77931_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "camera": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "camera": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "camera": "this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51D169F3_5D33_4624_41BA_0284E1487720",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "camera": "this.panorama_51D169F3_5D33_4624_41BA_0284E1487720_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "camera": "this.panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "camera": "this.panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "camera": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "camera": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "camera": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "camera": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "camera": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 0)",
   "camera": "this.panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.7,
   "yaw": 27.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618"
  },
  {
   "backwardYaw": -165.43,
   "yaw": 63.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202"
  },
  {
   "backwardYaw": -23.99,
   "yaw": 36.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA"
  }
 ],
 "vfov": 180,
 "label": "198_final",
 "id": "panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6",
 "thumbnailUrl": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7CAC54CC_5D11_4E7C_41AE_174B574940B7",
  "this.overlay_7C04CFE9_5D11_3A27_41CD_E1154F3CD0D8",
  "this.overlay_7D7EF3D3_5D11_CA64_41A3_88D9A9E47EEA"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 50.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_674AEE61_5CF3_7A27_41D0_7092EA151253",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.99,
   "yaw": 2.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_t.jpg"
  }
 ],
 "label": "08",
 "id": "panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D",
 "thumbnailUrl": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_t.jpg",
 "overlays": [
  "this.overlay_495B4AFB_5D13_3A1B_41D4_6AF27DCF7958",
  "this.overlay_6C9E17F9_5D11_4A24_41CC_421A22E3A17F"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 48.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_628FE9AE_5CF3_463D_41D0_1AB8E6C36592",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66CEEEB0_5CF3_7A24_418D_5900048609FF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 36.93,
   "yaw": -23.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "backwardYaw": 28.89,
   "yaw": -72.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  },
  {
   "backwardYaw": 28.89,
   "yaw": -129.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA"
  },
  {
   "backwardYaw": -27.63,
   "yaw": 108.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  },
  {
   "backwardYaw": -154.88,
   "yaw": -6.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B"
  },
  {
   "backwardYaw": -109.41,
   "yaw": -129.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759"
  }
 ],
 "vfov": 180,
 "label": "200-final",
 "id": "panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA",
 "thumbnailUrl": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7E99F702_5D32_CBE5_4195_F343FC046035",
  "this.overlay_7E7BFD5A_5D33_3E65_41D7_22D2371C3571",
  "this.overlay_7E3C33CB_5D33_4A64_419B_D9581B312F0A",
  "this.overlay_79BEFC81_5D33_3EE4_41B8_4FC2C3BFF4A9",
  "this.overlay_7ACDA8D2_5D33_4665_41D6_097B1C7D9368",
  "this.overlay_7B9CECC8_5D36_DE64_41CE_9BE990C04210"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6473ED7C_5CF3_7E1C_41D4_B2A5E62C4E5F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -88.63,
  "class": "PanoramaCameraPosition",
  "pitch": 10.63
 },
 "id": "panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 78.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_643B1DC9_5CF3_7E67_41C5_594169D9AD51",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.5,
   "yaw": 177.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D6B953_5D31_4664_41D0_FD91B2438114"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_t.jpg"
  }
 ],
 "label": "11",
 "id": "panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8",
 "thumbnailUrl": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_t.jpg",
 "overlays": [
  "this.overlay_4BE59078_5D11_4625_41B0_B2EEBED4F2D6",
  "this.overlay_6F7ABB12_5D11_3BE4_41D3_AE0729CB3750"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_665A9EF6_5CF3_7A2D_41AD_417D4DD3D48C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64013DE2_5CF3_7E25_41D6_FCFF1FF64037",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 152.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67FD3DF0_5CF3_7E25_41C3_BA0BEDA51F87",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "backwardYaw": -88.93,
   "yaw": 21.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618"
  },
  {
   "backwardYaw": -131.89,
   "yaw": 52.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112"
  }
 ],
 "vfov": 180,
 "label": "203-final",
 "id": "panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3",
 "thumbnailUrl": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_752DAF27_5D31_5A2B_41A6_438558526A95",
  "this.overlay_745D2912_5D36_C7E4_41C5_20891389AE50",
  "this.overlay_741729CB_5D36_C67B_41BA_283F4797BB39",
  "this.overlay_77F1C5D9_5D36_CE64_41C7_553F1B3A42CF",
  "this.overlay_75A76389_5D37_4AE4_41BD_B8D2B0F16D86",
  "this.overlay_74E42339_5D37_4A27_419A_5E82071E0642"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6747EE5A_5CF3_7A64_41D2_8FE8D6162C87",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 90.31,
   "yaw": -90.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618"
  },
  {
   "backwardYaw": 177.99,
   "yaw": 0.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16"
  },
  {
   "backwardYaw": 63.81,
   "yaw": -165.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_t.jpg"
  }
 ],
 "label": "06",
 "id": "panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202",
 "thumbnailUrl": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_t.jpg",
 "overlays": [
  "this.overlay_4AF35276_5D12_CA2C_41D3_9DBC4B587E33",
  "this.overlay_4A1372C5_5D12_CA6F_41D6_0221D9E67FE6",
  "this.overlay_4A7A5891_5D13_C6E4_41BE_7A0C9833F272",
  "this.overlay_6DF0AAAC_5D17_5A3D_41D7_275C8B1D6D6A"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64693DA3_5CF3_7E2B_41BA_0EE3F4D3F648",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64533DAA_5CF3_7E24_41D6_9B7EC3233E93",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -6.41,
   "yaw": -70.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "backwardYaw": -159.15,
   "yaw": 62.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D"
  },
  {
   "backwardYaw": -70.34,
   "yaw": 42.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  },
  {
   "backwardYaw": 14.82,
   "yaw": -101.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112"
  },
  {
   "backwardYaw": 21.73,
   "yaw": -88.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3"
  },
  {
   "backwardYaw": -72.73,
   "yaw": 28.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA"
  }
 ],
 "vfov": 180,
 "label": "201-final",
 "id": "panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF",
 "thumbnailUrl": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7B905FEB_5D36_DA24_4181_733B31CC74B5",
  "this.overlay_7B70281A_5D36_C5E4_41C4_844C2480C536",
  "this.overlay_7AD45E72_5D31_3A24_41B1_F92CD222ECCD",
  "this.overlay_7AB66D28_5D31_5E24_41BF_ADB3E115ED76",
  "this.overlay_74730C76_5D31_FE2D_4190_3E9C9AE99B0F",
  "this.overlay_78E1CC63_5D3F_3E24_41D5_88A1253673ED",
  "this.overlay_7BF02B7B_5D3F_7A1B_41D4_D55B6EAF865C"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6719FE82_5CF3_7AE5_4145_55444B77AAC4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 144.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6640DEFC_5CF3_7A1D_41C3_FE3F3804BF0D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.3,
   "yaw": -177.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "backwardYaw": -70.84,
   "yaw": -6.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  },
  {
   "backwardYaw": -0.63,
   "yaw": -176.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2"
  },
  {
   "backwardYaw": 179.62,
   "yaw": -1.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854"
  },
  {
   "backwardYaw": -86.55,
   "yaw": 87.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_t.jpg"
  }
 ],
 "label": "01",
 "id": "panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16",
 "thumbnailUrl": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_t.jpg",
 "overlays": [
  "this.overlay_52A86074_5D36_C62C_41D6_3A4F7BC463DD",
  "this.overlay_52DE428C_5D37_4AFC_41CD_FC335E8FC107",
  "this.overlay_527BBBFF_5D37_3A1C_41BD_5C65203C6608",
  "this.overlay_71709AB2_5D33_5A25_41CF_209FB3FD3C42",
  "this.overlay_71C37A2A_5D31_3A25_41D2_0810E0B1F525",
  "this.overlay_70EA676A_5D31_4A24_41C8_50532D293DCE"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.61,
   "yaw": 1.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D6B953_5D31_4664_41D0_FD91B2438114"
  },
  {
   "backwardYaw": 2.01,
   "yaw": 177.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_t.jpg"
  }
 ],
 "label": "09",
 "id": "panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA",
 "thumbnailUrl": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_t.jpg",
 "overlays": [
  "this.overlay_489AEFBA_5D12_FA25_41D1_12FB345E936B",
  "this.overlay_48050DB7_5D11_3E2B_41CC_33EF9A26455D"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6465FD95_5CF3_7EEF_41C2_4C9FB289A5FC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -117.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_672C5E75_5CF3_7A2C_41C5_DD9F1B39ED6F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67A52E1D_5CF3_7A1C_41D0_5C3D7993999A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67BFDE15_5CF3_7DEF_41CA_ECAB8C9BE73F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67336E68_5CF3_7A25_41C6_D7F371F3B8A5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -142.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66389F08_5CF3_7BE4_41D1_88B6B7F2EF8D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D6B953_5D31_4664_41D0_FD91B2438114_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6657DEF0_5CF3_7A24_41CA_B367EC17E6B4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 42.96,
   "yaw": -70.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  },
  {
   "backwardYaw": -6.53,
   "yaw": -45.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B"
  },
  {
   "backwardYaw": 108.65,
   "yaw": -27.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA"
  }
 ],
 "vfov": 180,
 "label": "199_final",
 "id": "panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50",
 "thumbnailUrl": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7C0A7DD4_5D11_5E6C_41A5_D630A4A93EEB",
  "this.overlay_7F88C8DA_5D11_4664_41B5_17DD702E4410",
  "this.overlay_7F2C52B9_5D11_4A24_41CD_1F86C67AFDD8",
  "this.overlay_7CF98473_5D11_4E2B_41C7_8E8BB9A9D0FD",
  "this.overlay_7C52A88C_5D0F_46FC_41C7_9AF38E184D83"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_647F0D85_5CF3_7EEF_41C1_C9D4BA94E98D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67F62DE9_5CF3_7E27_41C3_7C5C5C3C40C1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -104.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6695DEC8_5CF3_7A64_41D2_5B911A27F940",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64436DB7_5CF3_7E2B_41D6_2ED87C108753",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66743EDD_5CF3_7A1F_41CD_9EB81B452C2D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "minimumZoomFactor": 0.5,
 "label": "What-is-a-floor-plan-with-dimensions",
 "id": "map_4888A3B3_599D_FAE3_41B3_2B868D083454",
 "thumbnailUrl": "media/map_4888A3B3_599D_FAE3_41B3_2B868D083454_t.png",
 "width": 800,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_4888A3B3_599D_FAE3_41B3_2B868D083454.png",
    "width": 800,
    "class": "ImageResourceLevel",
    "height": 619
   },
   {
    "url": "media/map_4888A3B3_599D_FAE3_41B3_2B868D083454_lq.png",
    "width": 291,
    "class": "ImageResourceLevel",
    "height": 226,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "overlays": [
  "this.overlay_49C296E5_599C_3A67_41D6_49184B1DED0B"
 ],
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#00CC33",
 "height": 619,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.8,
   "yaw": -86.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_t.jpg"
  }
 ],
 "label": "19",
 "id": "panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384",
 "thumbnailUrl": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_t.jpg",
 "overlays": [
  "this.overlay_4991E524_5D17_CE2D_41C0_6C7ACA29619D"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 25.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67E3EDF7_5CF3_7E2B_41D0_45B6B43EE5E0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67262E6F_5CF3_7A3B_41B8_1627B19F4B38",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -116.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66B8EEBC_5CF3_7A1C_41C7_1592D8EEB60D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.01,
   "yaw": 0.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C"
  },
  {
   "backwardYaw": -84.28,
   "yaw": 86.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B"
  },
  {
   "backwardYaw": 64.06,
   "yaw": 37.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22"
  }
 ],
 "vfov": 180,
 "label": "14",
 "id": "panorama_51D551D0_5D32_C664_41B1_EACE45946AAA",
 "thumbnailUrl": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_t.jpg",
 "hfovMin": "120%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_41C10DB8_5D13_5E24_41D2_6B96895E1A13",
  "this.overlay_41B0C1F5_5D12_C62C_41D5_5524496C11C2",
  "this.overlay_41178F2D_5D12_DA3C_4152_E387143EB9E8"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 95.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_670CFE8B_5CF3_7AE4_41B5_9C6439FE6332",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66B5EEB5_5CF3_7A2F_41B5_F325D344EEE0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "overlays": [
  "this.overlay_717449AA_59E8_EB25_41C5_73671DBCEFBB"
 ],
 "vfov": 180,
 "label": "1-floor 1kv",
 "id": "panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691",
 "thumbnailUrl": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_4888A3B3_599D_FAE3_41B3_2B868D083454",
   "x": 453,
   "angle": 0,
   "y": 348.5,
   "class": "PanoramaMapLocation"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_t.jpg"
  }
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.49,
   "yaw": 10.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "backwardYaw": -101.74,
   "yaw": 14.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  },
  {
   "backwardYaw": -45.22,
   "yaw": -6.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  },
  {
   "backwardYaw": 52.38,
   "yaw": -131.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202"
  }
 ],
 "vfov": 180,
 "label": "202-final",
 "id": "panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112",
 "thumbnailUrl": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7AECB492_5D32_CEE4_41C2_4EE73065E56D",
  "this.overlay_7A40E3D1_5D32_CA64_41D3_43C1E435AF86",
  "this.overlay_7A691E0A_5D32_FDE4_41B6_F2DCD5B9E750",
  "this.overlay_7A2A8830_5D32_C624_41D5_D602975803AA",
  "this.overlay_7ABED9A2_5D33_4624_41A6_41EFCB700FE0",
  "this.overlay_75B6FA3C_5D33_DA1D_41D2_1E5E5C512ACE"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 27.63,
   "yaw": 170.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478A70DA_5D0F_C665_41BC_236726F77931"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D"
  },
  {
   "backwardYaw": -90.57,
   "yaw": 90.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_t.jpg"
  }
 ],
 "label": "07",
 "id": "panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618",
 "thumbnailUrl": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_t.jpg",
 "overlays": [
  "this.overlay_4B13E7B6_5D17_CA2C_41C7_4C81250223E1",
  "this.overlay_4AB55D59_5D17_DE67_41D5_59AFF498D8C3",
  "this.overlay_4AA00646_5D11_CA6D_41B0_FAC7F4BB4CE7",
  "this.overlay_6D60EC1D_5D11_7E1C_4197_2CA6D88C6B0D"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 134.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67DDCE03_5CF3_7DEB_41D0_3AB8F588BCC7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67C95E10_5CF3_7DE4_41C5_C38694FBCFB7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6637DF02_5CF3_7BE5_41CC_F5C377E8D3A0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 130.51,
   "yaw": -45.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_478A70DA_5D0F_C665_41BC_236726F77931"
  },
  {
   "backwardYaw": -127.12,
   "yaw": 30.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_t.jpg"
  }
 ],
 "label": "18",
 "id": "panorama_51D169F3_5D33_4624_41BA_0284E1487720",
 "thumbnailUrl": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_t.jpg",
 "overlays": [
  "this.overlay_7D18825F_5D11_4A1B_41A7_1875FFDB42E8",
  "this.overlay_7CEFE3BA_5D11_4A25_41C1_01D5839D623E"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -115.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66F38E91_5CF3_7AE7_41BD_4E4EFFC3DDA6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -149.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66F80E98_5CF3_7AE4_41B5_155D0EA66771",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62CD3972_5CF3_4625_41D2_6E69AC287F2A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 134.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_642E5DCF_5CF3_7E7B_41C7_086DF38D32C9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_629FD99E_5CF3_461D_41C0_0A8F21C847AE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_647BAD8D_5CF3_7EFF_41AD_26AAD29E4D5C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  },
  {
   "backwardYaw": -2.89,
   "yaw": -177.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D"
  },
  {
   "backwardYaw": -129.76,
   "yaw": -109.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_t.jpg"
  }
 ],
 "label": "04",
 "id": "panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759",
 "thumbnailUrl": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_t.jpg",
 "overlays": [
  "this.overlay_4E79C05B_5D16_C61B_41C8_FDCB4FDA00F9",
  "this.overlay_73668561_5D12_CE27_419F_C1A090AA0A27",
  "this.overlay_730F2601_5D12_CDE4_41CA_B19A7EB3ED7E",
  "this.overlay_72EC8217_5D12_C5EB_41B3_960DC3ACCCB9"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_644D0DBC_5CF3_7E1D_41B8_713818FC54B9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -127.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64173DD6_5CF3_7E6D_41C2_8E9BFA31EAF7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50"
  },
  {
   "backwardYaw": -1.76,
   "yaw": -178.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854"
  },
  {
   "backwardYaw": 62.55,
   "yaw": -159.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF"
  },
  {
   "backwardYaw": -177.49,
   "yaw": -2.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_t.jpg"
  }
 ],
 "label": "03",
 "id": "panorama_51C80674_5D31_CA2D_41C7_192364783D5D",
 "thumbnailUrl": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_t.jpg",
 "overlays": [
  "this.overlay_4ED34217_5D12_C5EC_41CB_6BB93020866E",
  "this.overlay_4E4221F6_5D11_462D_41B2_8A5325E5D9EA",
  "this.overlay_73EADFFD_5D11_7A1F_41A6_576815F8B5A9",
  "this.overlay_739A1695_5D11_4AEC_4169_4861E769CD90"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67AB9E23_5CF3_7A2B_41D4_30B1905C1AEB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6785FE2F_5CF3_7A3B_41D5_3C4C8A0B9BAC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -143.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_641A6DDC_5CF3_7E1C_41CA_ACCFAFAD989B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_478A70DA_5D0F_C665_41BC_236726F77931_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -49.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62DD0965_5CF3_462C_41C9_20F5D006D472",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4888A3B3_599D_FAE3_41B3_2B868D083454",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_63413905_5CF3_47EF_41D5_CABBE2D8C2A0",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67712E3D_5CF3_7A1F_41D5_4647CE2DC998",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingBottom": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "show": "this.playGlobalAudio(this.audio_7DD20954_59A8_EB6D_41D3_734D31F0A8F7)",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.setComponentVisibility(this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006, false, 0, null, null, false)",
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL"
 },
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "scrollBarVisible": "rollOver",
 "width": 300,
 "paddingRight": 0,
 "minHeight": 1,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "100%",
 "top": "0%",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  0,
  1
 ],
 "data": {
  "name": "1-floor"
 },
 "children": [
  "this.Button_7628BA90_5998_A9E5_41BB_B1DE21830197",
  "this.Button_76229A6F_5998_693A_41D0_2AB503CAD393"
 ],
 "id": "Container_71CA7931_59F7_AB27_419B_E440D1D1A006",
 "left": 300,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.41,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "12.244%",
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#000000",
  "#000000"
 ],
 "top": "28.35%",
 "paddingBottom": 0,
 "height": "30.65%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.59,
 "class": "Container",
 "gap": 0,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 115.05,
 "paddingRight": 0,
 "minHeight": 1,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 641,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "creationPolicy": "inAdvance",
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "left": 70,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "scrollBarVisible": "rollOver",
 "width": 550,
 "paddingRight": 0,
 "minHeight": 1,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "top": 34,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 140,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "1-\u044d\u0442\u0430\u0436"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "right": "4.34%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "width": "24.125%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingBottom": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "33.076%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": "4.85%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B, this.camera_67C95E10_5CF3_7DE4_41C5_C38694FBCFB7); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0C6B78_5D1F_3A25_41A5_B7FC1E2F3138",
   "pitch": -1.82,
   "yaw": 0.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.07,
   "distance": 100
  }
 ],
 "id": "overlay_47DD7052_5D11_C664_41BF_7EE25CD9C669",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.38,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.07,
   "pitch": -1.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499, this.camera_67C28E09_5CF3_7DE7_41B2_DE53FF310BF0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0C2B78_5D1F_3A25_41C0_F752D040E46F",
   "pitch": -7.6,
   "yaw": 75.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.94,
   "distance": 100
  }
 ],
 "id": "overlay_474B5D6B_5D11_DE3B_41D4_25D1372991AB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 75.49,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.94,
   "pitch": -7.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0B6B78_5D1F_3A25_41D5_54665911D09E",
   "pitch": -3.08,
   "yaw": 39.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.05,
   "distance": 100
  }
 ],
 "id": "overlay_47224B9C_5D11_5A1D_41B4_7B7801904E08",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 39.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.05,
   "pitch": -3.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D169F3_5D33_4624_41BA_0284E1487720, this.camera_67DDCE03_5CF3_7DEB_41D0_3AB8F588BCC7); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0CEB78_5D1F_3A25_41C3_F137A501719E",
   "pitch": -2.32,
   "yaw": 130.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.06,
   "distance": 100
  }
 ],
 "id": "overlay_47EF9C8C_5D11_7EFD_41B5_98D1EA0557AF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 130.51,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.06,
   "pitch": -2.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F393807_5D13_45EB_41C0_FD2ADDA977F2",
   "pitch": 29.2,
   "yaw": 11.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.82,
   "distance": 100
  }
 ],
 "id": "overlay_6EA640E4_5D16_C62C_41B0_A3E52BB66B5B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 11.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.82,
   "pitch": 29.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F36B80C_5D13_45FD_41C9_F58856AB8702",
   "pitch": 33.48,
   "yaw": 175.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.2,
   "distance": 100
  }
 ],
 "id": "overlay_6E56A370_5D16_CA24_41BE_7D70E420E3D1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 175.35,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.2,
   "pitch": 33.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22, this.camera_669A4ECF_5CF3_7A7B_41BE_014EC3BD6A17); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0E4B7E_5D1F_3A1D_41B1_12443F5ECCD3",
   "pitch": -4.21,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.29,
   "distance": 100
  }
 ],
 "id": "overlay_42CF14C1_5D11_4E64_41D3_19013260C54A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.29,
   "pitch": -4.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C, this.camera_66A11EC2_5CF3_7A64_41B5_2259CB2946A2); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0FEB7E_5D1F_3A1D_41D3_BD0A1B9A361F",
   "pitch": -5.97,
   "yaw": 84.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.24,
   "distance": 100
  }
 ],
 "id": "overlay_4206013B_5D12_C61B_41CE_DAA27B2E1F6A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 84.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.24,
   "pitch": -5.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478A70DA_5D0F_C665_41BC_236726F77931, this.camera_6695DEC8_5CF3_7A64_41D2_5B911A27F940); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0F6B7E_5D1F_3A1D_41B9_0E5F9A118700",
   "pitch": -7.22,
   "yaw": -83.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.19,
   "distance": 100
  }
 ],
 "id": "overlay_7DE341D1_5D12_C667_4184_CE58D4406B2C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -83.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.19,
   "pitch": -7.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0F1B7E_5D1F_3A1D_41D5_F0142C3A97ED",
   "pitch": -7.98,
   "yaw": -177.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.16,
   "distance": 100
  }
 ],
 "id": "overlay_7D5B123E_5D13_4A1C_41B2_71129B0CA1AC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -177.36,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.16,
   "pitch": -7.98
  }
 ]
},
{
 "media": "this.panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_631DE92E_5CF3_463D_41D3_975D58874584, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
 "camera": "this.panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_631DE92E_5CF3_463D_41D3_975D58874584",
 "class": "PanoramaPlayListItem"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B, this.camera_6640DEFC_5CF3_7A1D_41C3_FE3F3804BF0D); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0D5B7E_5D1F_3A1D_41B4_51C9E37A35C6",
   "pitch": -1.7,
   "yaw": -40.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.85,
   "distance": 100
  }
 ],
 "id": "overlay_40A42B53_5D17_3A64_41D3_4EA9B459CFBE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -40.2,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.85,
   "pitch": -1.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA, this.camera_66389F08_5CF3_7BE4_41D1_88B6B7F2EF8D); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0D0B7E_5D1F_3A1D_4161_4FA26B97F16C",
   "pitch": -3.71,
   "yaw": 64.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.81,
   "distance": 100
  }
 ],
 "id": "overlay_4006E31C_5D16_CA1C_41D0_BD917C23B4C2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 64.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.81,
   "pitch": -3.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499, this.camera_6637DF02_5CF3_7BE5_41CC_F5C377E8D3A0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0EAB7E_5D1F_3A1D_41C8_DFD66F8D7445",
   "pitch": -2.7,
   "yaw": -177.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.83,
   "distance": 100
  }
 ],
 "id": "overlay_4029630C_5D16_CBFC_41C7_7950978DCD99",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -177.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.83,
   "pitch": -2.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8, this.camera_679E8E29_5CF3_7A27_41CF_0378151CD586); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B097B78_5D1F_3A24_41D4_CCEF8476BED0",
   "pitch": -2.7,
   "yaw": -0.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.32,
   "distance": 100
  }
 ],
 "id": "overlay_4B854F57_5D13_3A6C_41C3_CEF8F9BA415F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.5,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.32,
   "pitch": -2.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA, this.camera_67AB9E23_5CF3_7A2B_41D4_30B1905C1AEB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B091B78_5D1F_3A24_41C1_CE17FDDDE082",
   "pitch": -5.97,
   "yaw": 177.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.24,
   "distance": 100
  }
 ],
 "id": "overlay_4822FAA6_5D11_3A2C_41B9_C6B06BCF9D00",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 177.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.24,
   "pitch": -5.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F3C1806_5D13_45ED_41D3_136D8140A1D6",
   "pitch": 39.88,
   "yaw": 63.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.46,
   "distance": 100
  }
 ],
 "id": "overlay_6C32CD3A_5D13_7E25_41AC_D55EC0E852D6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 63.81,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.46,
   "pitch": 39.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F3DA806_5D13_45ED_41BD_40E0D19473F0",
   "pitch": 54.95,
   "yaw": 37.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.82,
   "distance": 100
  }
 ],
 "id": "overlay_6EFC00E8_5D13_C625_41D4_480D503B152F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 37.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.82,
   "pitch": 54.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D, this.camera_644D0DBC_5CF3_7E1D_41B8_713818FC54B9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4CC860A4_5D0E_C62D_4142_6653F81E5EA0",
   "pitch": -3.2,
   "yaw": -1.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.83,
   "distance": 100
  }
 ],
 "id": "overlay_4D0306D8_5D31_4A65_41C7_159B9F31D75A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.76,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.83,
   "pitch": -3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16, this.camera_64436DB7_5CF3_7E2B_41D6_2ED87C108753); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4CC890A4_5D0E_C62D_41C1_7A1A90191C14",
   "pitch": -6.47,
   "yaw": 179.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.72,
   "distance": 100
  }
 ],
 "id": "overlay_4C9BEB1A_5D31_3BE5_41C6_8A366CF6FFE7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 179.62,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.72,
   "pitch": -6.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F24D803_5D13_45E4_41D6_7F3FC44846EA",
   "pitch": 84.1,
   "yaw": -74.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.33,
   "distance": 100
  }
 ],
 "id": "overlay_711148ED_5D0F_C63F_41A3_407F5C3DF263",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -74.49,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 2.33,
   "pitch": 84.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F247803_5D13_45E4_41C1_11E393C837BE",
   "pitch": 77.31,
   "yaw": -173.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.97,
   "distance": 100
  }
 ],
 "id": "overlay_709D5251_5D0F_CA67_41D0_2967CD854532",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -173.72,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.97,
   "pitch": 77.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F240803_5D13_45E4_41A3_B5AF17BE2662",
   "pitch": 56.96,
   "yaw": -21.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.33,
   "distance": 100
  }
 ],
 "id": "overlay_737A25B0_5D0E_CE25_41D4_2DCC6D2EA874",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -21.23,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.33,
   "pitch": 56.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16, this.camera_627179BA_5CF3_4625_41C6_6CF8D5948687); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B76DB77_5D1F_3A2C_41CB_34A2D1F8DC32",
   "pitch": 0.06,
   "yaw": -0.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.11,
   "distance": 100
  }
 ],
 "id": "overlay_48D61ABD_5D11_7A1F_41C9_EDFF2C7CF814",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.11,
   "pitch": 0.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F209804_5D13_45ED_41D3_2AAEEF2237C3",
   "pitch": 27.7,
   "yaw": 0.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.34,
   "distance": 100
  }
 ],
 "id": "overlay_725915A3_5D16_CE2B_41D7_421D8F3F05A8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.34,
   "pitch": 27.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA, this.camera_665A9EF6_5CF3_7A2D_41AD_417D4DD3D48C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0C8B78_5D1F_3A25_41CD_7D4AA0F5A1DE",
   "pitch": -3.2,
   "yaw": -84.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.54,
   "distance": 100
  }
 ],
 "id": "overlay_41108852_5D11_4665_4198_AFA1495BC25E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -84.28,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.54,
   "pitch": -3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22, this.camera_6657DEF0_5CF3_7A24_41CA_B367EC17E6B4); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0C3B78_5D1F_3A25_41BC_16AD76B294CC",
   "pitch": -2.95,
   "yaw": -35.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.55,
   "distance": 100
  }
 ],
 "id": "overlay_40E3F7CC_5D11_4A7D_41D4_22B57CD5711D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -35.3,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.55,
   "pitch": -2.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478A70DA_5D0F_C665_41BC_236726F77931, this.camera_6661AEEA_5CF3_7A24_41BF_7F8567EEA7C3); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0DCB79_5D1F_3A27_41C9_1C8FAA440AEF",
   "pitch": -1.7,
   "yaw": -1.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.56,
   "distance": 100
  }
 ],
 "id": "overlay_4056AE41_5D11_5A64_41A2_D7D4FD42EFC1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.56,
   "pitch": -1.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F39380C_5D13_45FD_41B8_810A137EC036",
   "pitch": 21.79,
   "yaw": -7.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.33,
   "distance": 100
  }
 ],
 "id": "overlay_6E1A07A9_5D17_CA24_41C6_E37014BBEBE4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -7.16,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.33,
   "pitch": 21.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA, this.camera_667ABEE4_5CF3_7A2D_41A0_94FBE1BAC0AC); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F36C80C_5D13_45FD_41B2_6B5456257EFF",
   "pitch": 72.79,
   "yaw": -154.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.99,
   "distance": 100
  }
 ],
 "id": "overlay_69B42970_5D17_4625_41B4_86F566890B43",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -154.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.99,
   "pitch": 72.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D551D0_5D32_C664_41B1_EACE45946AAA, this.camera_66D55EA3_5CF3_7A2B_41D7_2A811BB20F38); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0A4B78_5D1F_3A25_41B1_98435749604C",
   "pitch": -4.46,
   "yaw": 2.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.28,
   "distance": 100
  }
 ],
 "id": "overlay_4493FB2B_5D11_3A24_41D5_F396E1FB2BD4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.01,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.28,
   "pitch": -4.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0BFB78_5D1F_3A25_41C7_6296C2D68A14",
   "pitch": -4.46,
   "yaw": -34.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.28,
   "distance": 100
  }
 ],
 "id": "overlay_445B5AB6_5D11_5A2C_41D5_A81B53D017C6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -34.17,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.28,
   "pitch": -4.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499, this.camera_66EF2E9E_5CF3_7A1C_41C9_5559B111A0BA); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0B9B78_5D1F_3A25_41D1_7F7CC81E460A",
   "pitch": -6.22,
   "yaw": -77.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.23,
   "distance": 100
  }
 ],
 "id": "overlay_45F71EA8_5D11_3A24_41C6_A378AC6DBAE5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -77.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.23,
   "pitch": -6.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D169F3_5D33_4624_41BA_0284E1487720, this.camera_66F80E98_5CF3_7AE4_41B5_155D0EA66771); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0B2B78_5D1F_3A25_41D4_2AD55EC1729F",
   "pitch": -4.46,
   "yaw": -127.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.28,
   "distance": 100
  }
 ],
 "id": "overlay_453ABF3D_5D0E_DA1F_41BF_91BCE5568195",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -127.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.28,
   "pitch": -4.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202, this.camera_66D85EAA_5CF3_7A24_41C3_903D8FF1A5DC); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0CBB78_5D1F_3A25_4196_1C7DCA7BEE81",
   "pitch": -0.82,
   "yaw": 177.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.05,
   "distance": 100
  }
 ],
 "id": "overlay_44384D9D_5D73_3E1C_41C0_7E3CA3954EA3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 177.99,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.05,
   "pitch": -0.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F3B3806_5D13_45ED_4167_051428D5599E",
   "pitch": 29.96,
   "yaw": -12.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.67,
   "distance": 100
  }
 ],
 "id": "overlay_6EAAADF9_5D11_FE24_41A0_8C57E43ECA30",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -12.18,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.67,
   "pitch": 29.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F38F806_5D13_45ED_419D_A6808482B421",
   "pitch": 36.24,
   "yaw": -175.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.59,
   "distance": 100
  }
 ],
 "id": "overlay_6A57224D_5D13_4A7F_41B0_0A6FB6F0C207",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -175.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.59,
   "pitch": 36.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618, this.camera_647BAD8D_5CF3_7EFF_41AD_26AAD29E4D5C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F35880E_5D13_45FC_41CC_396FDE6B0A8D",
   "pitch": -40.51,
   "yaw": 27.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.27,
   "distance": 100
  }
 ],
 "id": "overlay_7CAC54CC_5D11_4E7C_41AE_174B574940B7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 27.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.27,
   "pitch": -40.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202, this.camera_6465FD95_5CF3_7EEF_41C2_4C9FB289A5FC); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F35180E_5D13_45FC_41D2_6980B7D995D9",
   "pitch": -34.48,
   "yaw": 63.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.22,
   "distance": 100
  }
 ],
 "id": "overlay_7C04CFE9_5D11_3A27_41CD_E1154F3CD0D8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 63.81,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.22,
   "pitch": -34.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA, this.camera_646E8D9D_5CF3_7E1F_41A2_7CDD8D61615C); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F32D80E_5D13_45FC_41D1_B084D6B36BB5",
   "pitch": -6.34,
   "yaw": 36.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.73,
   "distance": 100
  }
 ],
 "id": "overlay_7D7EF3D3_5D11_CA64_41A3_88D9A9E47EEA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 36.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.73,
   "pitch": -6.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA, this.camera_62AC5991_5CF3_46E7_41CD_193CCA897F2F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B087B78_5D1F_3A24_41C3_DA99185D2A35",
   "pitch": -2.32,
   "yaw": 2.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.35,
   "distance": 100
  }
 ],
 "id": "overlay_495B4AFB_5D13_3A1B_41D4_6AF27DCF7958",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.01,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.35,
   "pitch": -2.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F3F8805_5D13_45EF_41C6_4A5157C35545",
   "pitch": 50.56,
   "yaw": 141.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.29,
   "distance": 100
  }
 ],
 "id": "overlay_6C9E17F9_5D11_4A24_41CC_421A22E3A17F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 141.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.29,
   "pitch": 50.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50, this.camera_67FD3DF0_5CF3_7E25_41C3_BA0BEDA51F87); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F30680E_5D13_45FD_4181_7DDFE9F79A4D",
   "pitch": 57.59,
   "yaw": 108.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.31,
   "distance": 100
  }
 ],
 "id": "overlay_7E99F702_5D32_CBE5_4195_F343FC046035",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 108.65,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.31,
   "pitch": 57.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6, this.camera_641A6DDC_5CF3_7E1C_41CA_ACCFAFAD989B); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F31F80E_5D13_45FD_41B1_DF0D65192EB5",
   "pitch": -5.21,
   "yaw": -23.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.02,
   "distance": 100
  }
 ],
 "id": "overlay_7E7BFD5A_5D33_3E65_41D7_22D2371C3571",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -23.99,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.02,
   "pitch": -5.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B, this.camera_67E3EDF7_5CF3_7E2B_41D0_45B6B43EE5E0); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F31780E_5D13_45FD_41CC_C44FF9B13DA4",
   "pitch": -31.34,
   "yaw": -6.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.58,
   "distance": 100
  }
 ],
 "id": "overlay_7E3C33CB_5D33_4A64_419B_D9581B312F0A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.58,
   "pitch": -31.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F31280E_5D13_45FD_41CE_E1DE19E269EF",
   "pitch": -33.1,
   "yaw": -35.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.42,
   "distance": 100
  }
 ],
 "id": "overlay_79BEFC81_5D33_3EE4_41B8_4FC2C3BFF4A9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -35.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.42,
   "pitch": -33.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF, this.camera_64013DE2_5CF3_7E25_41D6_FCFF1FF64037); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0EC80E_5D13_45FD_41CF_918E17D0A5C3",
   "pitch": -3.45,
   "yaw": -72.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.03,
   "distance": 100
  }
 ],
 "id": "overlay_7ACDA8D2_5D33_4665_41D6_097B1C7D9368",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -72.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.03,
   "pitch": -3.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759, this.camera_67D6CDFD_5CF3_7E1F_41CB_D8C0CCA69D97); this.mainPlayList.set('selectedIndex', 23); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0E580F_5D13_45FB_41B0_160336F620C6",
   "pitch": -36.36,
   "yaw": -129.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.09,
   "distance": 100
  }
 ],
 "id": "overlay_7B9CECC8_5D36_DE64_41CE_9BE990C04210",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -129.76,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.09,
   "pitch": -36.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D6B953_5D31_4664_41D0_FD91B2438114, this.camera_62BCA984_5CF3_46ED_41BC_C836D4C1BB67); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B0AAB78_5D1F_3A25_41D4_076E35562731",
   "pitch": -3.71,
   "yaw": 177.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.8,
   "distance": 100
  }
 ],
 "id": "overlay_4BE59078_5D11_4625_41B0_B2EEBED4F2D6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 177.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.8,
   "pitch": -3.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F3D0806_5D13_45ED_41C6_F4B8E4ABBDB7",
   "pitch": 53.7,
   "yaw": 85.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "distance": 100
  }
 ],
 "id": "overlay_6F7ABB12_5D11_3BE4_41D3_AE0729CB3750",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 85.16,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.37,
   "pitch": 53.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112, this.camera_628FE9AE_5CF3_463D_41D0_1AB8E6C36592); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0A8815_5D13_45EF_41CA_B293A7E43456",
   "pitch": -5.09,
   "yaw": 52.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.02,
   "distance": 100
  }
 ],
 "id": "overlay_752DAF27_5D31_5A2B_41A6_438558526A95",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 52.38,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.02,
   "pitch": -5.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF, this.camera_629FD99E_5CF3_461D_41C0_0A8F21C847AE); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0A0815_5D13_45EF_41CE_F8B8CF5198F2",
   "pitch": -9.36,
   "yaw": 21.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.84,
   "distance": 100
  }
 ],
 "id": "overlay_745D2912_5D36_C7E4_41C5_20891389AE50",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 21.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.84,
   "pitch": -9.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0B9815_5D13_45EF_41CA_24AEF50B79B7",
   "pitch": 2.2,
   "yaw": -3.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.08,
   "distance": 100
  }
 ],
 "id": "overlay_741729CB_5D36_C67B_41BA_283F4797BB39",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.08,
   "pitch": 2.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0B3815_5D13_45EF_41D4_C74598F6A136",
   "pitch": -9.86,
   "yaw": -9.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.81,
   "distance": 100
  }
 ],
 "id": "overlay_77F1C5D9_5D36_CE64_41C7_553F1B3A42CF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -9.17,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.81,
   "pitch": -9.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F08B815_5D13_45EF_41D0_2323BACD32B3",
   "pitch": -28.95,
   "yaw": -12.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.71,
   "distance": 100
  }
 ],
 "id": "overlay_75A76389_5D37_4AE4_41BD_B8D2B0F16D86",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -12.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.71,
   "pitch": -28.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F085816_5D13_45ED_41C0_73E3436DC060",
   "pitch": -28.95,
   "yaw": 23.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.71,
   "distance": 100
  }
 ],
 "id": "overlay_74E42339_5D37_4A27_419A_5E82071E0642",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 23.24,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.71,
   "pitch": -28.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618, this.camera_66CEEEB0_5CF3_7A24_418D_5900048609FF); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B769B77_5D1F_3A2C_41AF_A192A787C0B6",
   "pitch": -0.82,
   "yaw": -90.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 38.18,
   "distance": 100
  }
 ],
 "id": "overlay_4AF35276_5D12_CA2C_41D3_9DBC4B587E33",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.57,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.18,
   "pitch": -0.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B762B77_5D1F_3A2C_41C7_FC187DE71FC7",
   "pitch": -0.57,
   "yaw": 89.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 38.18,
   "distance": 100
  }
 ],
 "id": "overlay_4A1372C5_5D12_CA6F_41D6_0221D9E67FE6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 89.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.18,
   "pitch": -0.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C, this.camera_66B5EEB5_5CF3_7A2F_41B5_F325D344EEE0); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B77EB77_5D1F_3A2C_41D3_37D1A3E06F3D",
   "pitch": -0.31,
   "yaw": 0.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.38,
   "distance": 100
  }
 ],
 "id": "overlay_4A7A5891_5D13_C6E4_41BE_7A0C9833F272",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.5,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 27.38,
   "pitch": -0.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6, this.camera_66B8EEBC_5CF3_7A1C_41C7_1592D8EEB60D); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F216805_5D13_45EF_4189_20E1B62CA43A",
   "pitch": 76.31,
   "yaw": -165.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.4,
   "distance": 100
  }
 ],
 "id": "overlay_6DF0AAAC_5D17_5A3D_41D7_275C8B1D6D6A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -165.43,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.4,
   "pitch": 76.31
  }
 ]
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50, this.camera_67712E3D_5CF3_7A1F_41D5_4647CE2DC998); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0FF80F_5D13_45FB_41D3_9986336E6303",
   "pitch": 11.12,
   "yaw": 42.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.49,
   "distance": 100
  }
 ],
 "id": "overlay_7B905FEB_5D36_DA24_4181_733B31CC74B5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 42.96,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.49,
   "pitch": 11.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA, this.camera_6750EE54_5CF3_7A6C_41D4_2ADBFFD2CDC3); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0F980F_5D13_45FB_41A0_FFB1C19E94E0",
   "pitch": -24.31,
   "yaw": 28.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.17,
   "distance": 100
  }
 ],
 "id": "overlay_7B70281A_5D36_C5E4_41C4_844C2480C536",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 28.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.17,
   "pitch": -24.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0F280F_5D13_45FB_41D5_22DFCA711660",
   "pitch": -25.56,
   "yaw": -37.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17,
   "distance": 100
  }
 ],
 "id": "overlay_7AD45E72_5D31_3A24_41B1_F92CD222ECCD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -37.43,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17,
   "pitch": -25.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112, this.camera_67674E46_5CF3_7A6C_41D4_867FAF61C09C); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0CC80F_5D13_45FB_41D5_2C4AC077D600",
   "pitch": -15.76,
   "yaw": -101.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.13,
   "distance": 100
  }
 ],
 "id": "overlay_7AB66D28_5D31_5E24_41BF_ADB3E115ED76",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -101.74,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.13,
   "pitch": -15.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3, this.camera_676A4E4D_5CF3_7A7F_41C3_007B07A5B8B2); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0C580F_5D13_45FB_41CB_14107ED680E5",
   "pitch": -5.21,
   "yaw": -88.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.76,
   "distance": 100
  }
 ],
 "id": "overlay_74730C76_5D31_FE2D_4190_3E9C9AE99B0F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -88.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.76,
   "pitch": -5.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16, this.camera_6785FE2F_5CF3_7A3B_41D5_3C4C8A0B9BAC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0DF80F_5D13_45FB_41CA_B8AC927B1553",
   "pitch": -68.02,
   "yaw": -70.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.05,
   "distance": 100
  }
 ],
 "id": "overlay_78E1CC63_5D3F_3E24_41D5_88A1253673ED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -70.84,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.05,
   "pitch": -68.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D, this.camera_678A2E36_5CF3_7A2C_41D7_1D24BB7B58AA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0D980F_5D13_45FB_41D4_C8FFAB4EC620",
   "pitch": -57.97,
   "yaw": 62.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.99,
   "distance": 100
  }
 ],
 "id": "overlay_7BF02B7B_5D3F_7A1B_41D4_D55B6EAF865C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 62.55,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.99,
   "pitch": -57.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854, this.camera_6473ED7C_5CF3_7E1C_41D4_B2A5E62C4E5F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4CC750A3_5D0E_C62B_41D6_79C68A805209",
   "pitch": -2.95,
   "yaw": -1.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.58,
   "distance": 100
  }
 ],
 "id": "overlay_52A86074_5D36_C62C_41D6_3A4F7BC463DD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.58,
   "pitch": -2.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384, this.camera_647F0D85_5CF3_7EEF_41C1_C9D4BA94E98D); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4CC7F0A3_5D0E_C62B_41D1_E7F3BB176677",
   "pitch": -3.45,
   "yaw": 87.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.57,
   "distance": 100
  }
 ],
 "id": "overlay_52DE428C_5D37_4AFC_41CD_FC335E8FC107",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 87.8,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.57,
   "pitch": -3.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2, this.camera_6477BD71_5CF3_7E24_41A1_5E686CFF6907); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4CC830A4_5D0E_C62D_41BC_7C09568C2D78",
   "pitch": -3.96,
   "yaw": -176.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.56,
   "distance": 100
  }
 ],
 "id": "overlay_527BBBFF_5D37_3A1C_41BD_5C65203C6608",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -176.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.56,
   "pitch": -3.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF, this.camera_625159D7_5CF3_466B_418F_3C3701213C96); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F2687FE_5D13_4A1D_41D6_2E87924BFB73",
   "pitch": 63.87,
   "yaw": -6.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.28,
   "distance": 100
  }
 ],
 "id": "overlay_71709AB2_5D33_5A25_41CF_209FB3FD3C42",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.28,
   "pitch": 63.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F2627FE_5D13_4A1D_41D0_B20EFFCD7291",
   "pitch": 48.55,
   "yaw": -109.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.96,
   "distance": 100
  }
 ],
 "id": "overlay_71C37A2A_5D31_3A25_41D2_0810E0B1F525",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -109.16,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.96,
   "pitch": 48.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112, this.camera_626119C5_5CF3_466F_41A6_0905EF3EF7EF); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F27B7FE_5D13_4A1D_41CB_0265ECF842B4",
   "pitch": 52.32,
   "yaw": -177.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.66,
   "distance": 100
  }
 ],
 "id": "overlay_70EA676A_5D31_4A24_41C8_50532D293DCE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -177.49,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.66,
   "pitch": 52.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D6B953_5D31_4664_41D0_FD91B2438114, this.camera_67BFDE15_5CF3_7DEF_41CA_ECAB8C9BE73F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B082B78_5D1F_3A24_41C8_420140EAA652",
   "pitch": -3.08,
   "yaw": 1.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.59,
   "distance": 100
  }
 ],
 "id": "overlay_489AEFBA_5D12_FA25_41D1_12FB345E936B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 1.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 26.59,
   "pitch": -3.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D, this.camera_67A52E1D_5CF3_7A1C_41D0_5C3D7993999A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B09CB78_5D1F_3A24_41D0_B21B33E5A98F",
   "pitch": -4.33,
   "yaw": 177.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.55,
   "distance": 100
  }
 ],
 "id": "overlay_48050DB7_5D11_3E2B_41CC_33EF9A26455D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 177.99,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 26.55,
   "pitch": -4.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA, this.camera_645B0DB0_5CF3_7E25_41D1_E92CDE5806BE); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F32580E_5D13_45FD_41CB_2499581DEF2C",
   "pitch": -64.5,
   "yaw": -27.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.49,
   "distance": 100
  }
 ],
 "id": "overlay_7C0A7DD4_5D11_5E6C_41A5_D630A4A93EEB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -27.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.49,
   "pitch": -64.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F33F80E_5D13_45FD_41B4_9374B96352A2",
   "pitch": -19.16,
   "yaw": -29.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.05,
   "distance": 100
  }
 ],
 "id": "overlay_7F88C8DA_5D11_4664_41B5_17DD702E4410",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -29.14,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.05,
   "pitch": -19.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F33980E_5D13_45FD_41B9_74887F54DC71",
   "pitch": -50.31,
   "yaw": -13.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.82,
   "distance": 100
  }
 ],
 "id": "overlay_7F2C52B9_5D11_4A24_41CD_1F86C67AFDD8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -13.57,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.82,
   "pitch": -50.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF, this.camera_64693DA3_5CF3_7E2B_41BA_0EE3F4D3F648); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F33380E_5D13_45FD_41BD_40049481229D",
   "pitch": -19.91,
   "yaw": -70.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.99,
   "distance": 100
  }
 ],
 "id": "overlay_7CF98473_5D11_4E2B_41C7_8E8BB9A9D0FD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -70.34,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.99,
   "pitch": -19.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112, this.camera_64533DAA_5CF3_7E24_41D6_9B7EC3233E93); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F30C80E_5D13_45FD_41A3_027B6858B03C",
   "pitch": -12.37,
   "yaw": -45.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.5,
   "distance": 100
  }
 ],
 "id": "overlay_7C52A88C_5D0F_46FC_41C7_9AF38E184D83",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -45.22,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.5,
   "pitch": -12.37
  }
 ]
},
{
 "map": {
  "width": 14,
  "x": 446,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_4888A3B3_599D_FAE3_41B3_2B868D083454_HS_0_map.gif",
     "width": 14,
     "class": "ImageResourceLevel",
     "height": 29
    }
   ]
  },
  "y": 334,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 29,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 446,
  "height": 29,
  "y": 334,
  "width": 14,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_4888A3B3_599D_FAE3_41B3_2B868D083454_HS_0.png",
     "width": 14,
     "class": "ImageResourceLevel",
     "height": 29
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "1"
  }
 ],
 "id": "overlay_49C296E5_599C_3A67_41D6_49184B1DED0B",
 "class": "AreaHotspotMapOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16, this.camera_67336E68_5CF3_7A25_41C6_D7F371F3B8A5); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B001B7E_5D1F_3A1D_41D4_679F0B0E1D3F",
   "pitch": -3.96,
   "yaw": -86.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 51.63,
   "distance": 100
  }
 ],
 "id": "overlay_4991E524_5D17_CE2D_41C0_6C7ACA29619D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -86.55,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 51.63,
   "pitch": -3.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C, this.camera_6719FE82_5CF3_7AE5_4145_55444B77AAC4); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B710B70_5D1F_3A25_41CF_414105BDA363",
   "pitch": -2.7,
   "yaw": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.33,
   "distance": 100
  }
 ],
 "id": "overlay_41C10DB8_5D13_5E24_41D2_6B96895E1A13",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.75,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.33,
   "pitch": -2.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D69024_5D32_C62D_41CF_3FE55C73107B, this.camera_670CFE8B_5CF3_7AE4_41B5_9C6439FE6332); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B73FB76_5D1F_3A2C_41B0_EB2EE2138D4E",
   "pitch": -3.2,
   "yaw": 86.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.32,
   "distance": 100
  }
 ],
 "id": "overlay_41B0C1F5_5D12_C62C_41D5_5524496C11C2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 86.67,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.32,
   "pitch": -3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22, this.camera_66F38E91_5CF3_7AE7_41BD_4E4EFFC3DDA6); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B739B76_5D1F_3A2C_416F_70BBC33F7465",
   "pitch": -3.96,
   "yaw": 37.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.3,
   "distance": 100
  }
 ],
 "id": "overlay_41178F2D_5D12_DA3C_4152_E387143EB9E8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 37.43,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.3,
   "pitch": -3.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_75656047_59E8_B96A_41A0_E842AB0ED571",
   "pitch": -28.83,
   "yaw": 35.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.79,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_717449AA_59E8_EB25_41C5_73671DBCEFBB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 35.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.79,
   "pitch": -28.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0D480F_5D13_45FB_41C5_1711A004878A",
   "pitch": -21.17,
   "yaw": -32.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.57,
   "distance": 100
  }
 ],
 "id": "overlay_7AECB492_5D32_CEE4_41C2_4EE73065E56D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -32.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.57,
   "pitch": -21.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF, this.camera_643B1DC9_5CF3_7E67_41C5_594169D9AD51); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0AF80F_5D13_45FB_41D3_6E317E59ACB9",
   "pitch": -15.14,
   "yaw": 14.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.19,
   "distance": 100
  }
 ],
 "id": "overlay_7A40E3D1_5D32_CA64_41D3_43C1E435AF86",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 14.82,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.19,
   "pitch": -15.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50, this.camera_642E5DCF_5CF3_7E7B_41C7_086DF38D32C9); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0A7810_5D13_45E5_4194_8134D649F5A0",
   "pitch": -3.83,
   "yaw": -6.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.8,
   "distance": 100
  }
 ],
 "id": "overlay_7A691E0A_5D32_FDE4_41B6_F2DCD5B9E750",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.8,
   "pitch": -3.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3, this.camera_64173DD6_5CF3_7E6D_41C2_8E9BFA31EAF7); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0A0810_5D13_45E5_41B7_5FC546DADD7A",
   "pitch": 23.18,
   "yaw": -131.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.94,
   "distance": 100
  }
 ],
 "id": "overlay_7A2A8830_5D32_C624_41D5_D602975803AA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -131.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.94,
   "pitch": 23.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16, this.camera_64325DC3_5CF3_7E64_41D5_0D4CF6C37ABE); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0D2810_5D13_45E5_41CA_56238C1D9D8F",
   "pitch": -41.64,
   "yaw": 10.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.84,
   "distance": 100
  }
 ],
 "id": "overlay_7ABED9A2_5D33_4624_41A6_41EFCB700FE0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 10.3,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.84,
   "pitch": -41.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F0AE810_5D13_45E5_41C5_808B7E43EB76",
   "pitch": -32.09,
   "yaw": -17.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.22,
   "distance": 100
  }
 ],
 "id": "overlay_75B6FA3C_5D33_DA1D_41D2_1E5E5C512ACE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -17.08,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.22,
   "pitch": -32.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B778B77_5D1F_3A2C_41AD_6BE59E74C668",
   "pitch": -0.69,
   "yaw": -89.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.61,
   "distance": 100
  }
 ],
 "id": "overlay_4B13E7B6_5D17_CA2C_41C7_4C81250223E1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -89.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.61,
   "pitch": -0.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202, this.camera_66743EDD_5CF3_7A1F_41CD_9EB81B452C2D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B773B77_5D1F_3A2C_41B3_86E6EEC4F9D6",
   "pitch": -3.2,
   "yaw": 90.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.57,
   "distance": 100
  }
 ],
 "id": "overlay_4AB55D59_5D17_DE67_41D5_59AFF498D8C3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.57,
   "pitch": -3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B08EB77_5D1F_3A2B_41A5_95654EF8BD5B",
   "pitch": 1.07,
   "yaw": 2.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.83,
   "distance": 100
  }
 ],
 "id": "overlay_4AA00646_5D11_CA6D_41B0_FAC7F4BB4CE7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.51,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.83,
   "pitch": 1.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6, this.camera_66814ED6_5CF3_7A6D_41A4_6DABA46B6CA3); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F3E4805_5D13_45EF_41B8_EA6C510B27B3",
   "pitch": 81.46,
   "yaw": 170.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.76,
   "distance": 100
  }
 ],
 "id": "overlay_6D60EC1D_5D11_7E1C_4197_2CA6D88C6B0D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 170.7,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 2.76,
   "pitch": 81.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C, this.camera_62CD3972_5CF3_4625_41D2_6E69AC287F2A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B00AB7E_5D1F_3A1D_41B1_36743F2CE3D6",
   "pitch": -3.33,
   "yaw": 30.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.05,
   "distance": 100
  }
 ],
 "id": "overlay_7D18825F_5D11_4A1B_41A7_1875FFDB42E8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 30.52,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.05,
   "pitch": -3.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478A70DA_5D0F_C665_41BC_236726F77931, this.camera_62DD0965_5CF3_462C_41C9_20F5D006D472); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B006B7E_5D1F_3A1D_41D2_B40EC89365D8",
   "pitch": -2.32,
   "yaw": -45.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.07,
   "distance": 100
  }
 ],
 "id": "overlay_7CEFE3BA_5D11_4A25_41C1_01D5839D623E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -45.09,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.07,
   "pitch": -2.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51C80674_5D31_CA2D_41C7_192364783D5D, this.camera_6747EE5A_5CF3_7A64_41D2_8FE8D6162C87); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F225804_5D13_45ED_41D3_19C532EABFA7",
   "pitch": -2.95,
   "yaw": -177.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 48.67,
   "distance": 100
  }
 ],
 "id": "overlay_4E79C05B_5D16_C61B_41C8_FDCB4FDA00F9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -177.49,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 48.67,
   "pitch": -2.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F222804_5D13_45ED_41C8_A1EDAD3CC6DE",
   "pitch": 51.06,
   "yaw": -82.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.53,
   "distance": 100
  }
 ],
 "id": "overlay_73668561_5D12_CE27_419F_C1A090AA0A27",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -82.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.53,
   "pitch": 51.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA, this.camera_674AEE61_5CF3_7A27_41D0_7092EA151253); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F23A804_5D13_45ED_41C7_C9D339E6FEE5",
   "pitch": 37.49,
   "yaw": -109.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.76,
   "distance": 100
  }
 ],
 "id": "overlay_730F2601_5D12_CDE4_41CA_B19A7EB3ED7E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -109.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.76,
   "pitch": 37.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F233804_5D13_45ED_41D1_003E98B06E88",
   "pitch": 28.2,
   "yaw": -173.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.61,
   "distance": 100
  }
 ],
 "id": "overlay_72EC8217_5D12_C5EB_41B3_960DC3ACCCB9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -173.97,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.61,
   "pitch": 28.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759, this.camera_6713AE7B_5CF3_7A1B_41D7_341B88E0106A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B75EB77_5D1F_3A2C_41B5_22BF45235440",
   "pitch": -1.57,
   "yaw": -2.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.65,
   "distance": 100
  }
 ],
 "id": "overlay_4ED34217_5D12_C5EC_41CB_6BB93020866E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -2.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 32.65,
   "pitch": -1.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854, this.camera_67262E6F_5CF3_7A3B_41B8_1627B19F4B38); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B75AB77_5D1F_3A2C_41B0_CB4564667908",
   "pitch": -2.58,
   "yaw": -178.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.63,
   "distance": 100
  }
 ],
 "id": "overlay_4E4221F6_5D11_462D_41B2_8A5325E5D9EA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -178.49,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 32.63,
   "pitch": -2.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF, this.camera_672C5E75_5CF3_7A2C_41C5_DD9F1B39ED6F); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F253804_5D13_45ED_4175_5A70D9068D7D",
   "pitch": 82.84,
   "yaw": -159.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.26,
   "distance": 100
  }
 ],
 "id": "overlay_73EADFFD_5D11_7A1F_41A6_576815F8B5A9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -159.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.26,
   "pitch": 82.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Generic 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F22C804_5D13_45ED_41D0_E8851BFE5C9B",
   "pitch": 54.7,
   "yaw": -45.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.1,
   "distance": 100
  }
 ],
 "id": "overlay_739A1695_5D11_4AEC_4169_4861E769CD90",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -45.09,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.1,
   "pitch": 54.7
  }
 ]
},
{
 "creationPolicy": "inAdvance",
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "minHeight": 1,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "100%",
 "top": "0%",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "horizontalAlign": "left",
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 300,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "paddingBottom": 40,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.7,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_7628BA90_5998_A9E5_41BB_B1DE21830197",
 "shadowSpread": 1,
 "width": "100%",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "minHeight": 1,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "layout": "horizontal",
 "fontStyle": "italic",
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingBottom": 0,
 "label": "1-\u041a\u0430\u0440\u0442\u0438\u0440\u0430",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19); this.setMediaBehaviour(this.playList_63413905_5CF3_47EF_41D5_CABBE2D8C2A0, 0); this.setComponentVisibility(this.MapViewer, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_76229A6F_5998_693A_41D0_2AB503CAD393",
 "shadowSpread": 1,
 "width": "100%",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "minHeight": 1,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "layout": "horizontal",
 "fontStyle": "italic",
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingBottom": 0,
 "label": "2-\u041a\u0430\u0440\u0442\u0438\u0440\u0430",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
 "class": "Button",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 110,
 "paddingRight": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 110,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "minHeight": 1,
 "width": "91.304%",
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "height": "85.959%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "gap": 3,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "white block"
 },
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "width": 366,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "height": 78,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 8,
 "top": 2,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Container",
 "gap": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue block"
 },
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "width": 366,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "height": 46,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": 86,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Container",
 "gap": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.01
 ]
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "left": 10,
 "fontStyle": "italic",
 "paddingLeft": 0,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "horizontalAlign": "left",
 "width": 391,
 "paddingRight": 0,
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "fontColor": "#000000",
 "top": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 75,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "class": "Label",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "fontSize": 61,
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 2"
 },
 "left": 12,
 "fontStyle": "italic",
 "paddingLeft": 0,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "horizontalAlign": "left",
 "width": 385,
 "paddingRight": 0,
 "minHeight": 1,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "fontColor": "#FFFFFF",
 "textShadowVerticalLength": 0,
 "textShadowColor": "#000000",
 "textShadowOpacity": 1,
 "top": 90,
 "borderSize": 0,
 "minWidth": 1,
 "height": 44,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "fontSize": 28,
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "top": "10%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "overflow": "scroll",
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "left": "15%",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "minHeight": 1,
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "80%",
 "top": "10%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "top": "10%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "overflow": "visible",
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "top": "10%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "overflow": "scroll",
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "left": "15%",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "minHeight": 1,
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "80%",
 "top": "10%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "top": "10%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "overflow": "visible",
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "top": "10%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "overflow": "scroll",
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "left": "15%",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "minHeight": 1,
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "80%",
 "top": "10%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0C6B78_5D1F_3A25_41A5_B7FC1E2F3138",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0C2B78_5D1F_3A25_41C0_F752D040E46F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0B6B78_5D1F_3A25_41D5_54665911D09E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0CEB78_5D1F_3A25_41C3_F137A501719E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F393807_5D13_45EB_41C0_FD2ADDA977F2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_478A70DA_5D0F_C665_41BC_236726F77931_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F36B80C_5D13_45FD_41C9_F58856AB8702",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0E4B7E_5D1F_3A1D_41B1_12443F5ECCD3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0FEB7E_5D1F_3A1D_41D3_BD0A1B9A361F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0F6B7E_5D1F_3A1D_41B9_0E5F9A118700",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51DA7BE4_5D33_5A2C_4192_650DE196A499_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0F1B7E_5D1F_3A1D_41D5_F0142C3A97ED",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0D5B7E_5D1F_3A1D_41B4_51C9E37A35C6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0D0B7E_5D1F_3A1D_4161_4FA26B97F16C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51DF1E1D_5D33_3A1C_41BA_62FE0EC84C22_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0EAB7E_5D1F_3A1D_41C8_DFD66F8D7445",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B097B78_5D1F_3A24_41D4_CCEF8476BED0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B091B78_5D1F_3A24_41C1_CE17FDDDE082",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F3C1806_5D13_45ED_41D3_136D8140A1D6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D6B953_5D31_4664_41D0_FD91B2438114_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F3DA806_5D13_45ED_41BD_40E0D19473F0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4CC860A4_5D0E_C62D_4142_6653F81E5EA0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4CC890A4_5D0E_C62D_41C1_7A1A90191C14",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F24D803_5D13_45E4_41D6_7F3FC44846EA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F247803_5D13_45E4_41C1_11E393C837BE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B5C826_5D31_462C_41CC_9AEAE26CC854_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F240803_5D13_45E4_41A3_B5AF17BE2662",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B76DB77_5D1F_3A2C_41CB_34A2D1F8DC32",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D432F9_5D31_CA24_41CC_1E53E1887AA2_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F209804_5D13_45ED_41D3_2AAEEF2237C3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0C8B78_5D1F_3A25_41CD_7D4AA0F5A1DE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0C3B78_5D1F_3A25_41BC_16AD76B294CC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0DCB79_5D1F_3A27_41C9_1C8FAA440AEF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F39380C_5D13_45FD_41B8_810A137EC036",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D69024_5D32_C62D_41CF_3FE55C73107B_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F36C80C_5D13_45FD_41B2_6B5456257EFF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0A4B78_5D1F_3A25_41B1_98435749604C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0BFB78_5D1F_3A25_41C7_6296C2D68A14",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0B9B78_5D1F_3A25_41D1_7F7CC81E460A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0B2B78_5D1F_3A25_41D4_2AD55EC1729F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0CBB78_5D1F_3A25_4196_1C7DCA7BEE81",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F3B3806_5D13_45ED_4167_051428D5599E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D575DB_5D32_CE64_41A2_2E81BAD4C14C_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F38F806_5D13_45ED_419D_A6808482B421",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F35880E_5D13_45FC_41CC_396FDE6B0A8D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F35180E_5D13_45FC_41D2_6980B7D995D9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_79F32086_5D13_46EC_41B1_7A1DA9FA80B6_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F32D80E_5D13_45FC_41D1_B084D6B36BB5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B087B78_5D1F_3A24_41C3_DA99185D2A35",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D29D65_5D31_5E2F_41D0_D1C68D7E865D_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F3F8805_5D13_45EF_41C6_4A5157C35545",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F30680E_5D13_45FD_4181_7DDFE9F79A4D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F31F80E_5D13_45FD_41B1_DF0D65192EB5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F31780E_5D13_45FD_41CC_C44FF9B13DA4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F31280E_5D13_45FD_41CE_E1DE19E269EF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0EC80E_5D13_45FD_41CF_918E17D0A5C3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5BBA1F_5D13_3A1C_41BE_74705DC5C0CA_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0E580F_5D13_45FB_41B0_160336F620C6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B0AAB78_5D1F_3A25_41D4_076E35562731",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D68789_5D31_4AE7_41B7_C1F0C9CCC5D8_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F3D0806_5D13_45ED_41C6_F4B8E4ABBDB7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0A8815_5D13_45EF_41CA_B293A7E43456",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0A0815_5D13_45EF_41CE_F8B8CF5198F2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0B9815_5D13_45EF_41CA_24AEF50B79B7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0B3815_5D13_45EF_41D4_C74598F6A136",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F08B815_5D13_45EF_41D0_2323BACD32B3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7BF097_5D13_C6EB_41D4_6884EB197FD3_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F085816_5D13_45ED_41C0_73E3436DC060",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B769B77_5D1F_3A2C_41AF_A192A787C0B6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B762B77_5D1F_3A2C_41C7_FC187DE71FC7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B77EB77_5D1F_3A2C_41D3_37D1A3E06F3D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D60119_5D31_C7E4_41BA_E9456ED2F202_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F216805_5D13_45EF_4189_20E1B62CA43A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0FF80F_5D13_45FB_41D3_9986336E6303",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0F980F_5D13_45FB_41A0_FFB1C19E94E0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0F280F_5D13_45FB_41D5_22DFCA711660",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0CC80F_5D13_45FB_41D5_2C4AC077D600",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0C580F_5D13_45FB_41CB_14107ED680E5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0DF80F_5D13_45FB_41CA_B8AC927B1553",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D677747_5D13_CA6C_4186_21B9F0B119AF_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0D980F_5D13_45FB_41D4_C8FFAB4EC620",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4CC750A3_5D0E_C62B_41D6_79C68A805209",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4CC7F0A3_5D0E_C62B_41D1_E7F3BB176677",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4CC830A4_5D0E_C62D_41BC_7C09568C2D78",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F2687FE_5D13_4A1D_41D6_2E87924BFB73",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F2627FE_5D13_4A1D_41D0_B20EFFCD7291",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51B8E74C_5D31_4A7D_41D6_E72261A85A16_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F27B7FE_5D13_4A1D_41CB_0265ECF842B4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B082B78_5D1F_3A24_41C8_420140EAA652",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51C8FB50_5D31_7A64_41C7_53533015CFDA_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B09CB78_5D1F_3A24_41D0_B21B33E5A98F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F32580E_5D13_45FD_41CB_2499581DEF2C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F33F80E_5D13_45FD_41B4_9374B96352A2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F33980E_5D13_45FD_41B9_74887F54DC71",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F33380E_5D13_45FD_41BD_40049481229D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E8DA0_5D13_5E24_41D2_702377EE9A50_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F30C80E_5D13_45FD_41A3_027B6858B03C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51A0B7CB_5D33_4A7B_41B6_A02C8DBEF384_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B001B7E_5D1F_3A1D_41D4_679F0B0E1D3F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B710B70_5D1F_3A25_41CF_414105BDA363",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B73FB76_5D1F_3A2C_41B0_EB2EE2138D4E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D551D0_5D32_C664_41B1_EACE45946AAA_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B739B76_5D1F_3A2C_416F_70BBC33F7465",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_71AA19D5_59EB_AB6F_41B0_7C0EE6993691_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_75656047_59E8_B96A_41A0_E842AB0ED571",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0D480F_5D13_45FB_41C5_1711A004878A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0AF80F_5D13_45FB_41D3_6E317E59ACB9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0A7810_5D13_45E5_4194_8134D649F5A0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0A0810_5D13_45E5_41B7_5FC546DADD7A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0D2810_5D13_45E5_41CA_56238C1D9D8F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D5B53DE_5D13_CA1C_41A1_BF132989B112_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F0AE810_5D13_45E5_41C5_808B7E43EB76",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B778B77_5D1F_3A2C_41AD_6BE59E74C668",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B773B77_5D1F_3A2C_41B3_86E6EEC4F9D6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B08EB77_5D1F_3A2B_41A5_95654EF8BD5B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D6BF16_5D31_3BED_41D1_BBDBD06E4618_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F3E4805_5D13_45EF_41B8_EA6C510B27B3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B00AB7E_5D1F_3A1D_41B1_36743F2CE3D6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D169F3_5D33_4624_41BA_0284E1487720_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B006B7E_5D1F_3A1D_41D2_B40EC89365D8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F225804_5D13_45ED_41D3_19C532EABFA7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F222804_5D13_45ED_41C8_A1EDAD3CC6DE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F23A804_5D13_45ED_41C7_C9D339E6FEE5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51D4F4B3_5D31_CE2B_41B7_0633D56E2759_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F233804_5D13_45ED_41D1_003E98B06E88",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B75EB77_5D1F_3A2C_41B5_22BF45235440",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7B75AB77_5D1F_3A2C_41B0_CB4564667908",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F253804_5D13_45ED_4175_5A70D9068D7D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_51C80674_5D31_CA2D_41C7_192364783D5D_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1F22C804_5D13_45ED_41D0_E8851BFE5C9B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "paddingBottom": 0,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.4,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "left": 10,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "transparencyActive": true,
 "width": 50,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "borderSize": 0,
 "top": "40%",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "95.909%",
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "minHeight": 30,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 40,
 "height": "25.03%",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 }
},
{
 "data": {
  "name": "-Container buttons"
 },
 "children": [
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_79FC4B82_59B8_AFE5_41C5_533BB453558C",
  "this.Button_76EB29BE_59A8_6B1D_41CB_9946A1392C12",
  "this.Button_76A73126_59A8_7B2D_41CB_F1F92D8FEFC3",
  "this.Button_697C9355_59A8_7F6F_41D0_1BD847CF303A",
  "this.Button_690FF54E_59A8_7B7A_41C6_0515ACFCBCD8",
  "this.Button_46386747_5999_A76A_4195_B716F01F3A2A",
  "this.Container_796992E6_59A8_992D_41D4_B5379A8FC6D3"
 ],
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "minHeight": 1,
 "width": "100%",
 "layout": "vertical",
 "top": "25%",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "25%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "class": "Container",
 "gap": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "minHeight": 1,
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "height": "26.316%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "bottom",
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "width": 60,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "85%",
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "horizontalAlign": "left",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "50%",
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 460,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "width": "25%",
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "height": 140,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "left": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "italic",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "minHeight": 1,
 "itemMaxHeight": 1000,
 "itemLabelFontFamily": "Oswald",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "minWidth": 1,
 "height": "92%",
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "class": "ThumbnailGrid",
 "itemThumbnailBorderRadius": 0,
 "itemOpacity": 1,
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "shadow": false,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemWidth": 220,
 "horizontalAlign": "center",
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "borderSize": 0,
 "itemLabelFontSize": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "bottom": -0.2,
 "itemLabelFontColor": "#666666",
 "scrollBarMargin": 2,
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemThumbnailWidth": 220,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "minHeight": 1,
 "scrollEnabled": true,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "insetBorder": false,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "width": "25%",
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "horizontalAlign": "left",
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 460,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "width": "25%",
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "height": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_79FC4B82_59B8_AFE5_41C5_533BB453558C",
 "shadowSpread": 1,
 "width": "100%",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "minHeight": 1,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "layout": "horizontal",
 "fontStyle": "italic",
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingBottom": 0,
 "label": "2-\u042d\u0422\u0410\u0416",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_76EB29BE_59A8_6B1D_41CB_9946A1392C12",
 "shadowSpread": 1,
 "width": "100%",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "minHeight": 1,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "layout": "horizontal",
 "fontStyle": "italic",
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingBottom": 0,
 "label": "3-\u042d\u0422\u0410\u0416",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_76A73126_59A8_7B2D_41CB_F1F92D8FEFC3",
 "shadowSpread": 1,
 "width": "100%",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "minHeight": 1,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "layout": "horizontal",
 "fontStyle": "italic",
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingBottom": 0,
 "label": "4-\u042d\u0422\u0410\u0416",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_697C9355_59A8_7F6F_41D0_1BD847CF303A",
 "shadowSpread": 1,
 "width": "100%",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "minHeight": 1,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "layout": "horizontal",
 "fontStyle": "italic",
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingBottom": 0,
 "label": "5-\u042d\u0422\u0410\u0416",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_690FF54E_59A8_7B7A_41C6_0515ACFCBCD8",
 "shadowSpread": 1,
 "width": "100%",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "minHeight": 1,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "layout": "horizontal",
 "fontStyle": "italic",
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingBottom": 0,
 "label": "6-\u042d\u0422\u0410\u0416",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "paddingLeft": 10,
 "id": "Button_46386747_5999_A76A_4195_B716F01F3A2A",
 "shadowSpread": 1,
 "width": "100%",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "minHeight": 1,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "layout": "horizontal",
 "fontStyle": "italic",
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingBottom": 0,
 "label": "\u0414\u0412\u041e\u0420",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_796992E6_59A8_992D_41D4_B5379A8FC6D3",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "height": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "height": 2,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 78,
 "paddingBottom": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f-1</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>(\u0436-\u043c \"\u042b\u043d\u0442\u044b\u043c\u0430\u043a\", \u0443\u043b. \u041a\u044b\u0440\u043c\u0430\u043d, 14)</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>\u0422\u0435\u043b: +996880111111</I></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "transparencyActive": true,
 "width": 42,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 42,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "layout": "horizontal",
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "height": 50,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 300,
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 100,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "height": 30,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minHeight": 50,
 "width": "100%",
 "top": 20,
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingBottom": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "left": 10,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingRight": 0,
 "minHeight": 50,
 "width": "14.22%",
 "borderSize": 0,
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingRight": 0,
 "minHeight": 50,
 "width": "14.22%",
 "borderSize": 0,
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minHeight": 50,
 "width": "10%",
 "top": 20,
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "layout": "horizontal",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "5%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 100,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "height": 40,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingBottom": 20,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "fontSize": "2.39vh",
 "width": 180,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "iconHeight": 32,
 "borderColor": "#000000",
 "iconWidth": 32,
 "fontStyle": "italic",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "backgroundColor": [
  "#04A3E1"
 ],
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "gap": 5,
 "iconBeforeLabel": true,
 "borderRadius": 50,
 "shadow": false,
 "textDecoration": "none",
 "paddingTop": 0,
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "layout": "horizontal",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "75%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_63413905_5CF3_47EF_41D5_CABBE2D8C2A0.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_71CA7931_59F7_AB27_419B_E440D1D1A006",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.MapViewer"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; }
 },
 "layout": "absolute",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "height": "100%",
 "verticalAlign": "top",
 "class": "Player",
 "gap": 10,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
