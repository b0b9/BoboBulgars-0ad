g_BackgroundLayerData.push(
	[
		{
			"offset": (time, width) => 1,
			"sprite": "b1",
			"tiling": true,
		},
				{
			"offset": (time, width) => 0.17 * width * Math.cos(0.1 * time) + width / 8,
			"sprite": "fog",
			"tiling": true,
		},
	]);
