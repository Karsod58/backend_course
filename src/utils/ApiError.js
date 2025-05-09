class ApiError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        errorss=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.error=errorss
        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}
export {ApiError}