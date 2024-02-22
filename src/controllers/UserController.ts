import { Request, Response, NextFunction } from 'express'

import User from '../models/userModel'
import { restrictTo } from '../middleware/restrictedTo'
import { isAuthenticated } from '../middleware/isAuthenticated'
import { get, patch, del, controller, use } from '../decorators'
import { getAll, getOne, updateOne, deleteOne } from './handlerFactory'
import AppError from '../utils/AppError'

@controller('/api/v1/users')
class UserController {
  @get('/')
  @use(isAuthenticated)
  async getUsers(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const handleGetAll = getAll(User)
    handleGetAll(req, res, next)
  }

  @get('/:id')
  @use(isAuthenticated)
  async getUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const handleGetUser = getOne(User)
    handleGetUser(req, res, next)
  }

  @patch('/:id')
  @use(isAuthenticated)
  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const handleUpdateUser = updateOne(User)
    handleUpdateUser(req, res, next)
  }

  @del('/:id')
  @use(isAuthenticated)
  @use(restrictTo('admin'))
  async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const handleDeleteUser = deleteOne(User)
    handleDeleteUser(req, res, next)
  }

  @get('/favorite/:id')
  public async getFavoriteMovies(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const user = await User.findById(req.params.id)
      if (!user) {
        return next(new AppError('No User found with that ID', 404))
      }
      const favoriteMovies = user?.favoriteContent

      res.status(200).json({
        status: 'success',
        data: {
          favoriteMovies,
        },
      })
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      })
    }
  }

  @patch('/favorite/:id')
  public async addFavoriteMovie(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const user = await User.findById(req.params.id)
      if (!user) {
        return next(new AppError('No User found with that ID', 404))
      }

      let favoriteMovies = user?.favoriteContent

      if (favoriteMovies?.indexOf(req.body.movieId) !== -1) {
        return res.status(200).json({
          status: 'success',
          data: {
            favoriteMovies,
          },
        })
      }

      favoriteMovies.push(req.body.movieId)
      await user?.updateOne({ favoriteContent: favoriteMovies })

      res.status(200).json({
        status: 'success',
        data: {
          favoriteMovies,
        },
      })
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      })
    }
  }

  @del('/favorite/:id')
  public async deleteFavoriteMovie(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const user = await User.findById(req.params.id)
      if (!user) {
        return next(new AppError('No User found with that ID', 404))
      }

      let favoriteMovies = user?.favoriteContent
      if (favoriteMovies?.indexOf(req.body.movieId) === -1) {
        return res.status(204).json({
          status: 'success',
          data: null,
        })
      }
      favoriteMovies?.splice(favoriteMovies.indexOf(req.body.movieId), 1)
      await user?.updateOne({ favoriteContent: favoriteMovies })

      res.status(204).json({
        status: 'success',
        data: null,
      })
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      })
    }
  }
}
