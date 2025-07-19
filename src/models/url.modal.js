import mongoose, {Schema} from 'mongoose'
import validUrl from 'valid-url'

const urlSchema = new Schema({
    url: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (v) => validUrl.isUri(v),
            message: props => `${props.value} is not a valid URI!`
        }
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, {timestamps: true})

const URL = mongoose.model('URL', urlSchema)

export default URL
