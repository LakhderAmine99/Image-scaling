export default class MathHelper {

    /**
     * 
     * @param {number} x A numeric expression.
     * @param {number} y A numeric expression.
     * @returns Returns the mean of a group numeric arguments.
     */
    static mean(X,Y){

        let sum = 0;

        for(let i=0 ; i<arguments.length ; i++)
        {
            sum += arguments[i];
        }

        return sum/(arguments.length);
    };
};