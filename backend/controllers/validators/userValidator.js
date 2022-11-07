export const userCreationSchema = {

    type: "object",
    required: ["name", "lastname", "password", "type"],
    properties: {

        name: {
            type: "number",
        },
        lastname: {
            type: "string",
        },
        password: {
            type: "string"
        },
        type: {
            type: "string",
            enum: ["employee", "employer"],
        },
    }
}