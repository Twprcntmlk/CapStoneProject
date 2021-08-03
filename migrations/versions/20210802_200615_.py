"""empty message

Revision ID: 54b97ee1677d
Revises: 1b54a5bca567
Create Date: 2021-08-02 20:06:15.810253

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '54b97ee1677d'
down_revision = '1b54a5bca567'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('collections', sa.Column('count', sa.Integer(), nullable=False))
    op.add_column('collections', sa.Column('id', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('collections', 'id')
    op.drop_column('collections', 'count')
    # ### end Alembic commands ###
