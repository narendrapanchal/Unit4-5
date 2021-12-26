const path=require("path");
module.exports={
    entry:"./code/index.js",
    output:{
        path:path.join(__dirname,"build"),
        filename:"bundle.js",
    },
    module:{
        rules:[{
            
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              
        },{
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        },{
          test:/\.js$/,
          use:["babel-loader"],
        }
      ]
    }
}
/**
 * 
 * export NVS_HOME="$HOME/.nvs"
git clone https://github.com/jasongin/nvs "$NVS_HOME"
. "$NVS_HOME/nvs.sh" install
 */