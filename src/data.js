export const API_KEY = 'AIzaSyDOm7pTeqoPqbb13MlD_PBCZ__r62rfPwA';

export const value_converter = (value)=>{
    if(value>=1000000)
        {
            return Math.floor(value/1000000)+"M";
        }

        else if(value>=1000)
            {
                return Math.floor(value/1000)+"k";
            }

            else {
                return value;
            }
}

