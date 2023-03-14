const path = require('path')
const bcrypt = require('bcryptjs')
const userModal = require('../models/user.models')
const db_creation = require('../models/db_creation')
const con = require('../config/db_connection')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'sbvidsvuibdsbvdsibvuidksvjdksuciv@423sbdbvodsb'
