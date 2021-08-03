"""empty message

Revision ID: 14b006c98d3b
Revises: 54b97ee1677d
Create Date: 2021-08-02 20:36:39.078236

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '14b006c98d3b'
down_revision = '54b97ee1677d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('collections', 'count')
    op.drop_column('collections', 'id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('collections', sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('collections', sa.Column('count', sa.INTEGER(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
