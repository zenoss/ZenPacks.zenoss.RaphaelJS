
import Globals
import os.path

# Add a tab 'Diagram' on the Locations and Groups pages
from AccessControl import Permissions as permissions
from Products.ZenModel.Location import Location
from Products.ZenModel.DeviceGroup import DeviceGroup
from Products.ZenModel.System import System
from Products.ZenModel.ZenPack import ZenPack as ZenPackBase
from copy import deepcopy

tab = { 'id'  : 'diagram',
        'name' : 'Datacenter View',
        'action' : 'diagram',
        'permissions' : (permissions.view,)
      }

for org in [Location, DeviceGroup, System]:
    local_factory = deepcopy(org.factory_type_information)[0]
    local_factory['actions'] += (tab,)
    org.factory_type_information = (local_factory,)

class ZenPack(ZenPackBase):
    packZProperties = [
        ('zRackImage', '', 'string')
    ]
