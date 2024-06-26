import {Router} from "express"
import {getPostsController} from "./controllers/getPostsController"
import {createPostController} from "./controllers/createPostController"
import {findPostController} from "./controllers/findPostController"
import {deletePostController} from "./controllers/deletePostController"
import {updatePostController} from "./controllers/updatePostController"
import {postInputValidator, idParamValidator} from "./validators/postValidators"
import {inputCheckErrorsMiddleware} from "../../middlewares/inputCheckErrorsMiddleware"
import {authMiddleware} from "../../middlewares/authMiddleware"

export const postsRouter = Router()

postsRouter.get('/', getPostsController)
postsRouter.post('/', postInputValidator, authMiddleware, inputCheckErrorsMiddleware, createPostController)
postsRouter.get('/:id', idParamValidator, inputCheckErrorsMiddleware, findPostController)
postsRouter.put('/:id', idParamValidator, postInputValidator, authMiddleware, inputCheckErrorsMiddleware, updatePostController)
postsRouter.delete('/:id', idParamValidator, authMiddleware, inputCheckErrorsMiddleware, deletePostController)