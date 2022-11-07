export const userCreationSchema = {

    type: "object",
    required: ["name", "lastname", "password", "type"],
    properties: {

        number: {
            type: "number",
        },
        street: {
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