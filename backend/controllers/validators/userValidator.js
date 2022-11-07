export const userCreationSchema = {

    type: "object",
    required: ["name", "lastname", "password", "type"],
    properties: {

        name: {
            type: "string",
            minLength: 1
        },
        lastname: {
            type: "string",
            minLength: 1
        },
        password: {
            type: "string",
            minLength: 8
        },
        type: {
            type: "string",
            enum: ["employee", "employer"],
        },
    }
}